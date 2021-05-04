//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);


function addTodo(event) {
    //Prevent form from submitting
    event.preventDefault();
    //Create Todo DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //Create LI
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //Check mark button
    const commpletedButton = document.createElement('button');
    commpletedButton.innerHTML = '<i class="fas fa-check"></i>';
    commpletedButton.classList.add("complete-btn");
    todoDiv.appendChild(commpletedButton);
    //Check trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //Append to list
    todoList.appendChild(todoDiv);
    //Clear Todo input value
    todoInput.value = "";
}

function deleteCheck(event) {
    const item = event.target;

    //Delete todo
    if (item.classList[0] === 'trash-btn') {
        const todo = item.parentElement;
        //Animation
        todo.classList.add('fall');
        todo.addEventListener('transitionend', function () {
            todo.remove();
        });
    }
    //Check mark
    if (item.classList[0] === 'complete-btn') {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}