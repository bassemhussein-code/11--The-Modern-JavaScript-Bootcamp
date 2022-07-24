const todos = [{
    text: 'Cook the food', 
    completed : false

}, {
    text: 'Do homework', 
    completed : false

},{
    text: 'Drink water', 
    completed : true

},{
    text: 'Go to university ', 
    completed : true
}]


 // filtering the total data 
 const filtering = function(){
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
    
}
filtering()

document.querySelector('#add-todo').addEventListener('click', function(){
    const para = document.createElement('p'); 
    const text =   document.querySelector('#new-todo-text');
    let pValue =para.textContent = text.value;
    console.log(pValue)
    todos.push({text:pValue , completed:false})
    console.log(todos)
    filtering()
});




