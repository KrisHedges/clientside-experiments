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
    },90); //The Lower this number the more confetti is generated

    //Shortblast - Comment out for continuous blasting
    setTimeout(function(){clearInterval(blastEm);}, 800);


    var cleanEm = setInterval(function(){
      console.log('Cleaning Em????');                                
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
      console.log('Stage Clear');
      clearInterval(blastEm);
      clearInterval(cleanEm);
    },800);
  };  

  $('button').click(function(){
    dropIt();
  });
  
  dropIt();
                   
});