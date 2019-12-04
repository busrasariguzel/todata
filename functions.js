document.querySelector('.add-todo').addEventListener('click', printTodo(function(){
    return todo = {
        text: document.querySelector('.todo-input').value,
        id: todos.length,
        complete: false,
        priority: document.querySelector('.priority').value,
    }
}))