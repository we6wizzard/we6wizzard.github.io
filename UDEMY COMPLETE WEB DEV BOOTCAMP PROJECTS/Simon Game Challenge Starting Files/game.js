
let buttonColours = ["red", "blue", "green", "yellow"];

let  gamePattern = [];
let  userClickedPattern = [];

//You'll need a way to keep track of whwther the game has started or not, so you only call nextSequence() on the first keypress
let started = false;

//Create a new variable called level and start at level 0
let level = 0;


//Use jQuery to detect when a keyboard key has been pressed - when that happens for the first time  call nextSequence()
$(document).keypress(function() {

    if(!started) {
        //the h1 title starts out saying, "Press A Key To Start", when the game has started. Change this to say level 0.
    

    $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }
  });
    
    
    $(".btn").click(function() {
        
        let userChosenColour = $(this).attr("id");
        userClickedPattern.push(userChosenColour);
        playSound(userChosenColour);
        animatePress(userChosenColour);

        //2. Call checkAnswer() after a user has clicked and chosen their answer, passing in the index of the last answer in the user's sequence.
        checkAnswer(userClickedPattern.length-1);
});

//1. Create a new function called checkAnswer(), it should take one input with the name currentLevel
function checkAnswer(currentLevel) {

  //3. Write an if statement inside checkAnswer() to check if the most recent user answer is the same as the game pattern. If so then log "success", otherwise log "wrong".
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

    console.log("Success!");

    //4. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
    if (userClickedPattern.length === gamePattern.length){

      //5. Call nextSequence() after a 1000 millisecond delay.
      setTimeout(function () {
        nextSequence();
      }, 1000);

    }

  } else {

    console.log("Wrong!");
   
    playSound("wrong");

    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);

    // Chanhge the h1 title to say "Game Over, Press Any Key to Restart", if the user got the answer wrong.
    $("#level-title").text("Game Over! Press Any Key to Continue!");

  }
}



function nextSequence() {

  userClickedPattern = [];

    //Inside nextSequence() increase the level by 1 every time the nextSequence is called
    level++;
    $("#level.title").text("Level " + level);

    //Inside nextSequence() update the h1 with this change in the value of level

  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  playSound(randomChosenColour);
}

function playSound(name) {
  let audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

//1. Create a new function called animatePress(), it should take a single input parameter called currentColour.
function animatePress(currentColor) {

  //2. Use jQuery to add this pressed class to the button that gets clicked inside animatePress().
  $("#" + currentColor).addClass("pressed");

  //3. use Google/Stackoverflow to figure out how you can use Javascript to remove the pressed class after a 100 milliseconds.
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
};

function startOver() {

}


