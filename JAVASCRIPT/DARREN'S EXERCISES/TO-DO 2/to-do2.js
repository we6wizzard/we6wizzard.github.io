let todos = [
    'Feed the Cat',
    'Walk the Dog',
    'Make a Pizza',
    'Read Book'
];

function renderTodos() {
    todoListElement.innerHTML = "";

    for (let i = 0; i < todos.length; i++) {
        let todoItem = todos[i];

        let newElement = document.createElement('li');
        newElement.innerText = todoItem;

        todoListElement.appendChild(newElement);
    }
}







/*get a reference to the <ol class = "completed"><ol> element that we created in our HTML.
function switchClicked () {
    completedElement.innerHTML = "";
    
    let btnSwitch = document.querySelector("switch");
    btnSwitch.onclick = switchClicked;
    
    
    completedElement.addEventListener ("onclick", function  {
        if (buttonClicked == true) {
            todos.push
            completedElement.value = "";

            renderTodos();

          
        }
            
    })
}; */


  

    







let todoListElement = document.querySelector(".todo-list");

let newTodoElement = document.querySelector(".new-todo");

newTodoElement.addEventListener ("keyup", function (event) {
    let wasEnterPressed = event. keyCode == 13;

    if (wasEnterPressed == true) {
        let textUserEntered = newTodoElement.value;

        todos.push(textUserEntered);

        newTodoElement.value = "";

        renderTodos();
    }

})



renderTodos(); 

































