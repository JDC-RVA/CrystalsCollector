var gem1 = 0;
var gem2 = 0;
var gem3 = 0;
var gem4 = 0;

var wins = 0;
var losses = 0;
var score = 0;

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

 var goal = randomNumber(12, 100);
  $("#goal").text("Goal: " + goal);

  function resetGame() {
    score = 0;
    $("#score").text("Score: " + score);
    goal = randomNumber(19, 120);
    $("#goal").text("Goal: " + goal);
    gem1 = 0;
    gem2 = 0;
    gem3 = 0;
    gem4 = 0;
  }

  function checkWin() {
    if (score === goal) {
      wins++;
      $("#wins").text("Wins: " + wins);
      resetGame();
    } else if (score > goal) {
      losses++;
      $("#losses").text("Losses: " + losses);
      resetGame();
    }
  }

   //Gem 1 function
   $("#gem1").on("click", function() {
    if (gem1 === 0) {
      gem1 = randomNumber(1, 12);
      console.log(gem1);
    }
    score += gem1;
    $("#score").text("Score: " + score);
    checkWin();
  });
  
  //Gem 2 function
  $("#gem2").on("click", function() {
    if (gem2 === 0) {
      gem2 = randomNumber(1, 12);
      console.log(gem2);
    }
    score += gem2;
    $("#score").text("Score: " + score);
    checkWin();
  });

  //Gem 3 function
  $("#gem3").on("click", function() {
    if (gem3 === 0) {
      gem3 = randomNumber(1, 12);
      console.log(gem3);
    }
    score += gem3;
    $("#score").text("Score: " + score);
    checkWin();
  });

  //Gem 4 function
  $("#gem4").on("click", function() {
    if (gem4 === 0) {
      gem4 = randomNumber(1, 12);
      console.log(gem4);
    }
    score += gem4;
    $("#score").text("Score: " + score);
    checkWin();
  });