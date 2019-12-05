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

document.querySelector('.show-priority-todo').addEventListener('click', (event)=>{
    currentTodos.forEach(entry => entry.text = entry.priority===1? 
        !entry.text.includes('Low')
        ?`${entry.text} - Low`:`${entry.text.slice(0,-5)}`
        :!entry.text.includes('High')
        ?`${entry.text} - High`:`${entry.text.slice(0,-6)}`)
    refreshTodos()
    if(event.target.innerText === 'SHOW PRIORITY'){
        event.target.innerText = 'HIDE PRIORITY' 
    }else {
        event.target.innerText = 'SHOW PRIORITY'
    }
})