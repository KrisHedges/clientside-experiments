$(document).ready(function(){
  var paper = Raphael(10, 0, 480, 480);
  var r = paper;
  var c = paper.ellipse(50, 50, 40, 40);
  var d = paper.circle(200, 100, 80);
  set = r.set(r.circle(300, 200, 20),r.circle(200, 100, 20),r.circle(100, 200, 20),r.circle(200, 300, 20),r.circle(200, 200, 20)).attr({stroke: "none", fill: "#666"}),
  fade = function (id) {
      return function () {
          set[id].attr({fill: "#fff", r: 12}).animate({fill: "#666", r: 15}, 500);
      };
  };

  var ex = '>',
      ey = '>';
  c.stop().animate({
      "20%": {cy: 200, easing: ey, callback: fade(0)},
      "40%": {cy: 100, easing: ey, callback: fade(1)},
      "60%": {cy: 200, easing: ey, callback: fade(2)},
      "80%": {cy: 300, easing: ey, callback: fade(3)},
      "100%": {cy: 200, easing: ey, callback: fade(4)}
  }, 5000).animate({
      "20%": {cx: 300, easing: ex},
      "40%": {cx: 200, easing: ex},
      "60%": {cx: 100, easing: ex},
      "80%": {cx: 200, easing: ex},
      "100%": {cx: 200, easing: ex}
  }, 5000);
});