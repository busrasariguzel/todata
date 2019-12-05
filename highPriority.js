document.querySelector('.just-high-todo').addEventListener('click', function(){
    currentTodos = priority2Only(currentTodos)
    refreshTodos()

})

document.querySelector('.complete--to-bottom-todo').addEventListener('click', function(){
    currentTodos = notCompleteFirst(currentTodos)
    refreshTodos()
})

document.querySelector('.high-tp-the-top-todo').addEventListener('click', function(){
    currentTodos = priority2First(currentTodos)
    refreshTodos()
})