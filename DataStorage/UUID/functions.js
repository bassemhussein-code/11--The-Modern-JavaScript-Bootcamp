const filteringTasks = function(){
    const uncompletedTasks = todos.filter(function(todo){

        return !todo.completed 
    })

 return uncompletedTasks
}

const createElement = function(){
   
    const uncompletedTasks= filteringTasks()
    //creating paragraph to conatin the length of the uncompleted tasks 
    document.querySelector(".new-div").innerHTML = ' '
    const paragraphToIncludeLengthOfUncompletedTasks = document.createElement('h2');  
    paragraphToIncludeLengthOfUncompletedTasks.textContent = `you have ${uncompletedTasks.length} to do tonight`;
    document.querySelector('.new-div').appendChild(paragraphToIncludeLengthOfUncompletedTasks);
    
    
    // looping through array to put each one in a specific paragraph
    uncompletedTasks.forEach(function(task){
     renderEachTask(task)
    })
}

const renderEachTask = function(task){
    const container = document.createElement('div') 
    const para = document.createElement('span'); 
    const checkbox = document.createElement('input')
    const removeButton = document.createElement('button')

 
    checkbox.setAttribute('type' , 'checkbox')
    container.appendChild(checkbox)

    para.textContent = task.text ;
    container.appendChild(para)

    removeButton.textContent = 'x'
    container.appendChild(removeButton)

    document.querySelector('.new-div').appendChild(container)

    removeButton.addEventListener('click' , function(){
        removeTodo(task.id)
        saveTodosLocalStorage(todos)
        filtering()
    })

}

const removeTodo = function(id){

    const todoIndex = todos.findIndex(function(todo){
        return todo.id == id
    })

    if (todoIndex > -1){
        todos.splice(todoIndex , 1)
    }
}

const saveTodosLocalStorage = function(){

    localStorage.setItem("todos" ,JSON.stringify(todos)?? [])
}

const renderInputPara = function(){
    const para = document.createElement('p'); 
    const text =   document.querySelector('#new-todo-text');
    let pValue =para.textContent = text.value;
    todos.push({text:pValue , completed:false , id:uuidv4()})
    console.log(todos)
    saveTodosLocalStorage()

}

const renderingLocaStorage = function(){
    const returnedtodos =  localStorage.getItem("todos")

    if (returnedtodos !== null){
         return JSON.parse(returnedtodos)
    }
    else{
        return []
    }
}

const filtering = function(){
    todos  = renderingLocaStorage()
    createElement()
}

const renderingInput = function(){

    document.querySelector('#add-todo').addEventListener('click', function(){
        renderInputPara()
        filtering()
    });
    
}
