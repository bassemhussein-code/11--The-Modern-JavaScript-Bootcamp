let todos = ['clean home' ,'get the ticket', 'listen to music' , 'drink water']

todos.splice(2,1)
todos.push('Buy coffee')
todos.shift() 

console.log(todos.length)

console.log(todos)


todos.forEach(function( item,index){

const num = index +1 
console.log(`${num}. ${item}`)
})

