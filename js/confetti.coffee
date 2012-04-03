$ ->
  window.rain = ->
    seed = Math.floor(new Date().getMilliseconds())
    $raincontainer = $("<div class='rain-container'></div>")
    $raindrop = $("<div class='rain-drop'></div>")

    randomX = ->
      Math.floor(Math.random(seed)*101)+'%'

    blast =  ->
      $raindrop.clone().css('left', randomX()).appendTo($raincontainer)

    # This just an ordered by color sequence this could be made random as well
    rainTime = ->
      interval = 200
      repeater = 80000
      masterBlaster = ->
        while interval < repeater
          setTimeout ->
            blast()
          , interval
          interval = interval * 2
      masterBlaster()

    doIt = ->
      stage = $('#stage')
      stage.append($raincontainer)
      blastEm = setInterval rainTime, 35 # The Lower this number the more rain is generated
      cleanUpTimer = setTimeout ->
        $raincontainer.fadeOut 2600, ->
          $raincontainer.remove()
        clearInterval(blastEm)
      ,800
    doIt()
