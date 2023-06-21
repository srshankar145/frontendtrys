//Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

//Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);

//Functions 
function addTodo(event) {
    event.preventDefault();

    //Todo Div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");

    //create LI
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    //CheckMark Button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fa-regular fa-square-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    //Trash Button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    //Append to main list.
    todoList.appendChild(todoDiv);

    //Clear todo Input value
    todoInput.value = "";
}

function deleteCheck(e) {
    const item = e.target;

    //Delete Todo
    if (item.classList[0] === "trash-btn") {
        const todo = item.parentElement;
        //Animation for delete will wait till animation finishes and after that item deleted
        todo.classList.add("fall");
        todo.addEventListener('transitionend', function () {
            todo.remove();
        })

    }

    //Check Mark
    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}

function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function (todo) {
        const mStyle = todo.style;
        if (mStyle != undefined && mStyle != null) {
            switch (e.target.value) {
                case "all":
                    mStyle.display = "flex";
                    break;
                case "completed":
                    if (todo.classList.contains("completed")) {
                        mStyle.display = "flex";
                    } else {
                        mStyle.display = "none";
                    }
                    break;
                case "uncompleted":
                    if (!todo.classList.contains("completed")) {
                        mStyle.display = "flex";
                    } else {
                        mStyle.display = "none";
                    }
                    break;

            }
        }
    });
}
