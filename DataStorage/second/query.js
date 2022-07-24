let todos = []

 const filtering = function(){
    
    const returnedtodos =  localStorage.getItem("todos")
    todos  = JSON.parse(returnedtodos)
     if(todos){
        const uncompletedTasks = todos.filter(function(todo){

            return !todo.completed 
        })
        
        //creating paragraph to conatin the length of the uncompleted tasks 
        document.querySelector(".new-div").innerHTML = ' '
        const paragraphToIncludeLengthOfUncompletedTasks = document.createElement('h2');  
        paragraphToIncludeLengthOfUncompletedTasks.textContent = `you have ${uncompletedTasks.length} to do tonight`;
        document.querySelector('.new-div').appendChild(paragraphToIncludeLengthOfUncompletedTasks);
        
        
        // looping through array to put each one in a specific paragraph
        uncompletedTasks.forEach(function(task){
        
        const para = document.createElement('p'); 
        para.textContent = task.text ;
        document.querySelector('.new-div').appendChild(para)
        // console.log(task.text)
        })
        
        console.log(todos)

    }
}
filtering()

document.querySelector('#add-todo').addEventListener('click', function(){
    const para = document.createElement('p'); 
    const text =   document.querySelector('#new-todo-text');
    let pValue =para.textContent = text.value;
    todos.push({text:pValue , completed:false})
    console.log(todos)
    localStorage.setItem("todos" ,JSON.stringify(todos)?? [])
    filtering()
});
