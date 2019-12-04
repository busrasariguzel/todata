
document.querySelector('.add-todo').addEventListener('click', ()=>{
    const entry = {
            text: document.querySelector('.todo-input').value,
            id: todos.length,
            complete: false,
            priority: Number(document.querySelector('.priority').value),
        }
        addTodo(entry)
        printTodo(entry)
}
    
)
