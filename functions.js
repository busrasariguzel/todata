document.querySelector('.add-todo').addEventListener('click', addToDo(function(){
    const entry ={
        text: document.querySelector('.todo-input').value,
        id: todos.length,
        complete: false,
        priority: document.querySelector('.priority').value,
    }
    addToo(entry)
    printTodo(entry)
}))

