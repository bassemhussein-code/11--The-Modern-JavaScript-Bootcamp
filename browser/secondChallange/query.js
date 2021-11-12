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
const uncompletedTasks = todos.filter(function(todo){

    return !todo.completed 
})

console.log(uncompletedTasks)    // array contains uncompleted tasks 

console.log(`you have ${uncompletedTasks.length} to do tonight`)   // printing the length in the console 


//creating paragraph to conatin the length of the uncompleted tasks 

const paragraphToIncludeLengthOfUncompletedTasks = document.createElement('p');  
paragraphToIncludeLengthOfUncompletedTasks.textContent = `you have ${uncompletedTasks.length} to do tonight`;
document.querySelector('body').appendChild(paragraphToIncludeLengthOfUncompletedTasks);


// looping through array to put each one in a specific paragraph
uncompletedTasks.forEach(function(task){

    const para = document.createElement('p'); 
    para.textContent = task.text ;
    document.querySelector('body').appendChild(para)
    console.log(task.text)
})