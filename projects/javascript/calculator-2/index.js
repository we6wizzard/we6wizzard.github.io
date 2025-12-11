let count = "";

const display = document.getElementById("display");


// * 10


const multiplyButton10 = document.getElementById("multiply");

function multiply10 () {
  let currentValue = parseInt(display.value);
  currentValue *=10;
  display.value = currentValue;
}


multiplyButton10.addEventListener("click", multiply10);



// +2 

const increaseButton2 = document.getElementById("increase2");

function increaseBy2() {
  let currentValue = parseInt(display.value);
  currentValue += 2;
  display.value = currentValue;
}

increaseButton2.addEventListener("click", increaseBy2);


//+5


const increaseButton5 = document.getElementById("increase5");

function increaseBy5() {
  let currentValue = parseInt(display.value);
  currentValue +=5;
  display.value = currentValue

}

increaseButton5.addEventListener("click", increaseBy5);


// +

const increaseButton1 = document.getElementById("increase");

function increase (){
let currentValue = parseInt(display.value);
currentValue +=1;
display.value = currentValue;


}

increaseButton1.addEventListener("click", increase);



// -

const decreaseButton1 = document.getElementById("decrease");

function decrease() {
  let currentValue = parseInt(display.value);
  currentValue -=1;
  display.value = currentValue;
}


decreaseButton1.addEventListener("click", decrease);

function clearScreen () {
  decreaseButton1.getElementById("display").value = "";
}


// -5


const decreaseButton5 = document.getElementById("decrease5");

function decreaseBy5() {
  let currentValue = parseInt(display.value);
  currentValue -=5;
  display.value = currentValue
}

decreaseButton5.addEventListener("click", decreaseBy5);




//-2

const decreaseButton2 = document.getElementById("decrease2");

function decreaseBy2() {
  let currentValue = parseInt(display.value);
  currentValue -=2
  display.value = currentValue;

}

decreaseButton2.addEventListener("click", decreaseBy2);












