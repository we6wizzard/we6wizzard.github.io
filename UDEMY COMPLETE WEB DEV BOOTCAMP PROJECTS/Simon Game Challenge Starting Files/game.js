let buttonColors = ["red", "blue", "green", "yellow"];

let gamePattern = []



function nextSequence() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    console.log(randomNumber);


    let randomChosenColor = buttonColors[randomNumber];

    gamePattern.push(randomChosenColor);


    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    //3. Use Google/Stackoverflow to figure out how you can use Javascript to play the sound for the button colour selected in step 1.
    var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
    audio.play();



}










