(function() {
  $(function() {
    window.rain = function() {
      var $raincontainer, $raindrop, blast, doIt, rainTime, randomX, seed;
      seed = Math.floor(new Date().getMilliseconds());
      $raincontainer = $("<div class='rain-container'></div>");
      $raindrop = $("<div class='rain-drop'></div>");
      randomX = function() {
        return Math.floor(Math.random(seed) * 101) + '%';
      };
      blast = function() {
        return $raindrop.clone().css('left', randomX()).appendTo($raincontainer);
      };
      rainTime = function() {
        var interval, masterBlaster, repeater;
        interval = 200;
        repeater = 80000;
        masterBlaster = function() {
          var _results;
          _results = [];
          while (interval < repeater) {
            setTimeout(function() {
              return blast();
            }, interval);
            _results.push(interval = interval * 2);
          }
          return _results;
        };
        return masterBlaster();
      };
      doIt = function() {
        var blastEm, cleanUpTimer, stage;
        stage = $('#stage');
        $raincontainer.prependTo(stage);
        blastEm = setInterval(rainTime, 35);
        return cleanUpTimer = setTimeout(function() {
          $raincontainer.fadeOut(2600, function() {
            return $raincontainer.remove();
          });
          return clearInterval(blastEm);
        }, 800);
      };
      return doIt();
    };
    return $('#drop').click(function() {
      return window.rain();
    });
  });
}).call(this);
