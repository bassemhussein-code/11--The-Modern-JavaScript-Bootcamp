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
     
    const para = document.createElement('p'); 
    para.textContent = task.text ;
    document.querySelector('.new-div').appendChild(para)
}

const renderInputPara = function(){
    const para = document.createElement('p'); 
    const text =   document.querySelector('#new-todo-text');
    let pValue =para.textContent = text.value;
    todos.push({text:pValue , completed:false})
    console.log(todos)
    localStorage.setItem("todos" ,JSON.stringify(todos)?? [])
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
