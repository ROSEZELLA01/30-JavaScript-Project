const input = document.getElementById("todo-input");
const addButton = document.getElementById("add-todo-btn");
const todoList = document.getElementById("todo-list");
const deleteBtn = document.getElementsByClassName("delete-btn");
const editBtn = document.getElementsByClassName("edit-btn");
const arr = []

addButton.addEventListener("click",(e)=>{
e.preventDefault();
if(input.value ==="" || input.value ===0 ){
    alert("enter a valid task")
}else{
    const list = document.createElement("li");
    list.innerHTML = `<div class="todo-item"><p class="todo-text">${input.value}</p> <button class="delete-btn">Delete</button> <button class="edit-btn">Edit</button></div>`;
    todoList.appendChild(list);
    arr.push(input.value);
    // console.log(arr);
    input.value = "";
}
});

// Attach event listener to delete buttons after adding a new todo
todoList.addEventListener("click", function(e) {
    if (e.target && e.target.classList.contains("delete-btn"))//
         {
        const li = e.target.closest("li");
        if (li) {
            li.remove();
            
        }
    }
});
// Attach event listener to edit buttons after adding a new todo
todoList.addEventListener("click", function(e) {
    if (e.target && e.target.classList.contains("edit-btn")) {
        const todoText = e.target.closest(".todo-item").querySelector(".todo-text");
        if (todoText) {
            todoText.contentEditable = "true";
            todoText.focus();
        }
    }
});


