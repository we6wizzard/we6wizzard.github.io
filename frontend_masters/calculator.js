let runningTotal = "0";  //tracks math operations. Have to keep some sort of background value somehwere for sums such as 5 + 10 + 30 + 2 etc to keep track of sum.
let buffer ="0"; //buffer, refers to screen
let previousOperator = null; //Have to keep track of what the last thing you tried to do, was...so "+" or "/" etc in this varaible.
const screen = document.querySelector(".screen"); //linked with/the variable for the renderer function below. 


function buttonClick(value) {  //(value) will be the button "8" or "9", "2" or "/" etc    
    if (isNaN(parseInt(value))) { //A routing function here that will either handle the math or the number etc. 
                                 //The symbols and numbers get handled differently. If value is not a number 
                                 //then it knows we have a symbol...so handle symbol with value...otherwise...its a number...
                                 //so/else...handle number...with value .
        handleSymbol(value);
    } else {
        handleNumber(value);
    }
    renderer();   //calls the rerender function below after buttonClick function as everytime a button is clicked you need to rerender the screen
                  
}

function handleNumber(number) { //function to handle the numbers
    if (buffer === "0") {
        buffer = number;
    }else {
        buffer += number;
    }
}

    //buffer = buffer + number/adding number on to the end..if you press 8 you don't want it to replace previous number. 
    //You need it to add on to number there already so if you add "8" on to "9" there already, you get "98". Buffer is assigned the number. 
    //They end up being the same thing



    function handleMath(value) {  //if buffer is straight up zero and you hit "+", "-", "x" or "/" all of those things end up being "0" anyway so you actually just
                                  //don't end up doing anything, so that case is handled first. If buffer triple equals zero, "do nothing" ...and "return". Whatever (value)
                                  //gets stored in (value) gets passed down to
    if (buffer === "0") {
        //do nothing
        return;
}

const intBuffer = parseInt(buffer); //parseInt method converts and returns strings into number. If you give it a string it returns NaN(Not a Number)/parses a value as a string
                                    //and returns the first integer/whole number. flush operation with the parseInt of the buffer.
if (runningTotal === 0) {
    runningTotal = intBuffer;
} else {
    flushOperation(intBuffer); //calling flushOperation function. (intBuffer) holds a sequence of integer values to be used in an I/0 operation
}

previousOperator = value;  //previousOperator is assigned whatver the (value) was up in the handleMath function so storing "+" or "x" or "/" etc
buffer = "0"; //(after whatever sum input you do, say you input 56 +..the screen will go back to 0 because you're about to put in a new number)

}


function flushOperation(intBuffer) {           //a function to do whatever its supposed to do/a function to do the addition or subratction or whatever. Will take in some sort
                                               //of intBuffer so whatever is passed into the (intBuffer) parameter above when this flushOperation (intBuffer) function is called
    if (previousOperator === "+") {
        runningTotal += intBuffer;               // runningTotal + intBuffer
    } else if (previousOperator === "-") {  
        runningTotal -= intBuffer;               //runningTotal - intBuffer
    } else if (previousOperator === "x") {
        runningTotal *= intBuffer;               //runningTotal * intBuffer
    } else if (previousOperator === "➗") {
        runningTotal /= intBuffer;               //runningTotal / intBuffer
    }
}

//if previous operator is strictly equal to "+" then do "+". If previousOperator triple equals to "-", then do "-" etc where the integer values stored in (intBuffer)
// get added or subratcted etc to thr current running total. 

function handleSymbol(symbol) {   //if symbol triple equals "C" then do this. Think of break as a closing curly brace. Its saying "I'm done with my switch statement"
    switch (symbol){
        case "C":
            buffer = "0";
            break;
        case "=":
            if (previousOperator === null) {
               return 
            }

            flushOperation(parseInt(buffer));
            previousOperator = null;
            buffer = "" + runningTotal;
            runningTotal = 0;
            break;
            
                                               //null - the absence of anything. Different from zero. If you have 0 of something - you have zero quantity of something.
                                               //If you have null you have nothing, no concept of anything. No previousOperator here in this case. 
                                               //Need two numbers to do math, so if you don't have two number - return right away. Otherwise we want to flush the operation
                                               //straight away. Buffer set equal to zero, goes back to buttonClick function and at very end of it, it calls rerender. Thats why 
                                               //here all we have to do is set buffer equal to 0 and then the rerender at end of buttonClick function will handle setting it to 0.

        case "🔙":
            if (buffer.length === 1) {
                buffer = "0";
            } else {
                buffer = buffer.substring("0", buffer.length - 1);  //take the string and chop off the last number so if you have 954 
                                                                    //its going to take 9 and 5 and cut off the 4.
            }
            break;
        case "+":
        case "-":
        case "x":
        case "➗":
            handleMath(symbol); //calls the handleMath function. Takes in the symbol that we got here.
            break;
    }
}

function renderer() {
    screen.innerText = buffer;  //Anytime rerender is called it just makes buffer and screen be the same thing...so 
                                //anytime someone clicks a button you need to rerender. 
}

function init() {
    document
    .querySelector(".calc-buttons") //picking up/finds the calc buttons in the <section class="calc-buttons">
    .addEventListener("click", function (event) {//one event listener added here that listens to all of the buttons due to "Event Bubbling"
        buttonClick(event.target.innerText);
    });
}

//Everytime someone clicks a button, it runs a function called buttonClick with the innerText. InnerText will be the "C" or "back arrow" or "1", "4"etc
//event.target is div containing the button that was clicked

init(); //calling the init function. Initialises everything
