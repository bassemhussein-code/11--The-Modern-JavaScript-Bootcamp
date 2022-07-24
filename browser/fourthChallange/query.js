const todos = [{
    text: 'My next trip', 
    body: 'I would like to go to spain '

}, {
    text: 'habits to work on', 
    body : 'Exercise ! eating a bit more .'

},{
    text: 'duties', 
    body : 'examing , studing'

},{
    text: 'Office Modification ', 
    body : 'Get a new seat'
}]

document.querySelector('button').addEventListener('click',function(e){

   console.log('you did it ');
   e.target.textContent = 'yes you clicked me';
});


document.querySelector('#remove').addEventListener('click',function(){


    document.querySelectorAll('.note').forEach(function(note){

        note.remove();
    })
});

document.querySelector('#search-text').addEventListener('input', function(e){

    console.log(e.target.value);
})






// // object to deal with local storage . 
// let user = {
//      name : "bassem" , 
//      age: 12
// }

// //local storage and json . 
// const userJSON = JSON.stringify(user)
// localStorage.setItem("user", userJSON);

// const new1  = localStorage.getItem("user")
// const usertwo = JSON.parse(new1)

// console.log(usertwo)

// console.log(` name ==> ${usertwo.name} and age ==>  ${usertwo.age}`)