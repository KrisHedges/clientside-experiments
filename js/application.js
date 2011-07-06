$(document).ready(function(){
  dropIt = function(){
    theater = "<div id='stage'><div class='confetti-container'></div></div>";
    redPiece = "<div class='red confetti-piece'></div>";
    greenPiece = "<div class='green confetti-piece'></div>";
    yellowPiece = "<div class='yellow confetti-piece'></div>";
    purplePiece = "<div class='purple confetti-piece'></div>";
    blackPiece = "<div class='black confetti-piece'></div>";
    

    createTheater = function(){
      $(theater).appendTo('body');
      player = $(".confetti-container");
    };
    createTheater();

    seed = Math.floor(Math.random());  
    
    blastRed = function(){
       $(redPiece).css('left', Math.floor(Math.random(seed)*101)+'%').appendTo(player);
    };
    blastGreen = function(){
       $(greenPiece).css('left', Math.floor(Math.random(seed)*101)+'%').appendTo(player);
    };
    blastPurple = function(){
       $(purplePiece).css('left', Math.floor(Math.random(seed)*101)+'%').appendTo(player);
    };
    blastYellow = function(){
      $(yellowPiece).css('left', Math.floor(Math.random(seed)*101)+'%').appendTo(player);
    };
    blastBlack = function(){
      $(blackPiece).css('left', Math.floor(Math.random(seed)*101)+'%').appendTo(player);
    };

    var confettiTime = function(){    
      setTimeout (function(){blastRed();}, 100 );
      setTimeout (function(){blastGreen();}, 200 );  
      setTimeout (function(){blastYellow();}, 0 );
      setTimeout (function(){blastPurple();}, 150 );
      setTimeout (function(){blastBlack();}, 220 );
      setTimeout (function(){blastRed();}, 250 );
      setTimeout (function(){blastGreen();}, 290 );  
      setTimeout (function(){blastYellow();}, 320 );
      setTimeout (function(){blastPurple();}, 50 );
      setTimeout (function(){blastBlack();}, 10 );
    };

    var blastEm = setInterval(function(){
      confettiTime();
    }, 220);

    var cleanEm = setInterval(function(){
      console.log('Cleaning Em????');                                
      setTimeout(function(){ 
        $('.red').first().remove();
      }, 1000);
      setTimeout(function(){ 
        $('.green').first().remove();
      }, 1000);
      setTimeout(function(){ 
        $('.purple').first().remove();
      }, 1000);
      setTimeout(function(){ 
        $('.yellow').first().remove();
      }, 1000);
      setTimeout(function(){ 
        $('.black').first().remove();
      }, 1000);
    },500);

    setTimeout(function(){
      console.log('Clear the Stage?????');                                
      stage = $("#stage");
      stage.fadeOut(1500, function(){
        $('#stage').remove(); 
       });
      console.log('Stage Clear');
      clearInterval(blastEm);
      clearInterval(cleanEm);
    }, 3000);
  };  

  $('button').click(function(){
    dropIt();
  });
  
  dropIt();
                   
});