document.querySelector('.not-complete-todo').addEventListener('click', ()=>{
    currentTodos = justNotComplete(currentTodos);
    refreshTodos();
})