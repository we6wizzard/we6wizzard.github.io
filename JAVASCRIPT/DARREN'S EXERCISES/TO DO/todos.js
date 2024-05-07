
// Create an array to store the todo list.
// An array is just a list that can store various data types
// such as strings, numbers, booleans, objects or even other arrays.
// To access elements (items) in the array, we use the array index.
// The index starts at 0, not 1 so to access the 2nd element in the
// array you use index 1.
// Arrays have a length property that states the number of elements
// currently in the array.
// In this example we are creating the array with some initial
// elements, but we could also have created an empty array with
// let todos = [];
let todos = [
  'Feed the cat',               // index: 0
  'Walk the dog',               // index: 1
  'Bake a cake',                // index: 2
  'Buy Holly some chocolate!'   // index: 3
];


function renderTodos() {
  // Clear out all of the content within the ol element as
  // we re-create all of the children li elements each time the
  // todos array is updated. This is quite a lazy way to update the
  // DOM, the are more optimal ways to do this but for now
  // this is plenty good enough.
  todoListElement.innerHTML = "";

  // Loop over each todo, create an li element for it and append
  // it to the ol element
  for (let i = 0; i < todos.length; i++) {
    // Get the todo from the array by it's index.
    let todoItem = todos[i];

    let newElement = document.createElement("li");
    newElement.innerText = todoItem;

    todoListElement.appendChild(newElement);
  }
}

//addEventListener("click", function (event) {
  



// Get a reference to the <ol class="todo-list"></ol> element that
// we created in our HTML.
// To get this reference we need to access the DOM. The DOM is
// available in JS via the document object. This object
// has a number of properties and functions on it that allow
// us to perform operations on the DOM (such as finding elements).
// The querySelector() function will find the first element in the DOM
// that matches the string argument. In this case it will
// find the first element in the DOM that has a class of todo-list.
// A reference to the <ol class="todo-list"></ol> will be stored
// in the todoListElement variable so we can use this in other parts of
// our code.
let todoListElement = document.querySelector(".todo-list");

// Get a reference to the <input class="new-todo" /> element.
let newTodoElement = document.querySelector(".new-todo");

// On the input element, add an event listener so the browser will
// inform our code when a user event has happened, in this case
// we want to be told when a keyup event happens on the input element.
// We register a callback function as the 2nd argument to the addEventListener() function.
// When the keyup event happens, the browser will execute our callback
// function so we can process the event.
// An event argument is passed into our callback function so we
// can get further information about the event that happened, such as
// which key which pressed
newTodoElement.addEventListener("keyup", function (event) {
  // Check if the keyCode on the event is equal to 13. 13 is the keyCode
  // for the enter key. Each key has it's own number
  let wasEnterPressed = event.keyCode == 13;

  // If the enter key was pressed we want to add the new todo
  if (wasEnterPressed == true) {
    // Read the value from the newTodoElement element, this will give us access
    // to the text the user types in.
    let textUserEntered = newTodoElement.value;

    // Now add / append (push) this text to the todos array.
    // This will add a new element to the end of the todos array.
    // At this point the array will now contain a new element but the
    // browser will not be displaying the new todo as we haven't
    // re-updated the DOM
    todos.push(textUserEntered);

    // Clear the input field text so it's ready for the user to add a new todo
    newTodoElement.value = "";

    // Re-render the todos list so the
    // user can see the new todo
    renderTodos();
  }
});


// Render the todos based on their initial value.
renderTodos();
