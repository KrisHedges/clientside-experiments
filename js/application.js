$(document).ready(function(){
  var dropIt = function(){
    var theater = "<div id='stage'><div class='confetti-container'></div></div>";
    var redPiece = "<div class='red confetti-piece'></div>";
    var greenPiece = "<div class='green confetti-piece'></div>";
    var yellowPiece = "<div class='yellow confetti-piece'></div>";
    var purplePiece = "<div class='purple confetti-piece'></div>";
    var blackPiece = "<div class='black confetti-piece'></div>";
    

    var createTheater = function(){
      $(theater).appendTo('body');
      player = $(".confetti-container");
    };
    createTheater();

    var seed = Math.floor(Math.random());  
    
    var blastRed = function(){
       $(redPiece).css('left', Math.floor(Math.random(seed)*101)+'%').appendTo(player);
    };
    var blastGreen = function(){
       $(greenPiece).css('left', Math.floor(Math.random(seed)*101)+'%').appendTo(player);
    };
    var blastPurple = function(){
       $(purplePiece).css('left', Math.floor(Math.random(seed)*101)+'%').appendTo(player);
    };
    var blastYellow = function(){
      $(yellowPiece).css('left', Math.floor(Math.random(seed)*101)+'%').appendTo(player);
    };
    var blastBlack = function(){
      $(blackPiece).css('left', Math.floor(Math.random(seed)*101)+'%').appendTo(player);
    };

    //This just an ordered by color sequence this could be made random as well
    var confettiTime = function(){    
      setTimeout (function(){blastRed();}, 99 );
      setTimeout (function(){blastGreen();}, 205 );  
      setTimeout (function(){blastYellow();}, 0 );
      setTimeout (function(){blastPurple();}, 153 );
      setTimeout (function(){blastBlack();}, 224 );
      setTimeout (function(){blastRed();}, 257 );
      setTimeout (function(){blastGreen();}, 291 );  
      setTimeout (function(){blastYellow();}, 318 );
      setTimeout (function(){blastPurple();}, 53 );
      setTimeout (function(){blastBlack();}, 12 );
    };

    var blastEm = setInterval(function(){
      confettiTime();
    },140); //The Lower this number the more confetti is generated

    //Shortblast - Comment out for continuous blasting
    setTimeout(function(){clearInterval(blastEm);}, 800);


    var cleanEm = setInterval(function(){
      setTimeout(function(){ 
        $('.red').first().remove();
      },1000);
      setTimeout(function(){ 
        $('.green').first().remove();
      },1000);
      setTimeout(function(){ 
        $('.purple').first().remove();
      },1000);
      setTimeout(function(){ 
        $('.yellow').first().remove();
      },1000);
      setTimeout(function(){ 
        $('.black').first().remove();
      },1000);
    },800);

    setTimeout(function(){
      stage = $("#stage");
      stage.fadeOut(1500, function(){
        $('#stage').remove(); 
       });
      clearInterval(blastEm);
      clearInterval(cleanEm);
    },800);
  };  

  $('#drop').click(function(){
    dropIt();
  });

  repeatrunning = false
  
  var repeatedlyDropIt = function(){
    repeatrunning = true
    dropIt();
    keepDropping = setInterval(function(){
      dropIt();
    }, 1800);  
  };

  $('#repeated').click(function(){
    if (repeatrunning == true){
      clearInterval(keepDropping);
      repeatrunning = false;
    }
    else {
      repeatedlyDropIt();
      repeatrunning = true;
    };
  });
                 
});