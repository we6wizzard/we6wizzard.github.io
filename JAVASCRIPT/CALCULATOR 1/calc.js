let count=0;

let buttonOne = document.querySelector("one");
let buttonTwo = document.querySelector("two");
let buttonThree = document.querySelector("three");
let buttonFour = document.querySelector("four");
let buttonFive = document.querySelector("five");
let buttonSix = document.querySelector("six");
let buttonSeven = document.querySelector("seven");
let buttonEight = document.querySelector("eight");
let buttonNine = document.querySelector("nine");
let buttonZero = document.querySelector("zero");
let buttonAdd = document.querySelector("add");
let buttonMinus = document.querySelector("minus");
let buttonMultiply = document.querySelector("multiply");
let buttonDivide = documemt.querySelector("divide");
let counterInput= document.querySelector(".counter");



function multiply() {
    a=Number(document.calculator.number1.value);
    b=Number(document.calculator.number2.value);
    c=a*b;
    document.calculator.total.value=c;
}