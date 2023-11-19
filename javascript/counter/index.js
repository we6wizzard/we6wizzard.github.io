let count = 0;

let decreaseButton = document.querySelector(".decrease");
let increaseButton = document.querySelector(".increase");
let decreaseButton2 = document.querySelector(".decrease2");
let increaseButton2 = document.querySelector(".increase2")
console.log(decreaseButton);
console.log(increaseButton);
console.log(increaseButton2);
console.log(decreaseButton2);

let counterInput = document.querySelector(".counter");
console.log(counterInput);

updateCounterInputValue();

decreaseButton.addEventListener("click", function () {
  updateCount(-1);
});

decreaseButton2.addEventListener("click", function () {
  updateCount(-2);
});

increaseButton2.addEventListener("click", function () {
  updateCount(2);

});

increaseButton.addEventListener("click", function () {
  updateCount(1);
})

function updateCounterInputValue() {
  counterInput.value = count;

}

function updateCount(updateBy) {
  let newCount = count + updateBy;

  if (newCount >= 0 && newCount <=9) {
     count = newCount;

  }

  updateCounterInputValue();
}
