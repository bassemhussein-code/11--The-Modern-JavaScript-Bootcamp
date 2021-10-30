// var is a function scope not block scope .. 
// var can redeclare a variable , used before .   "this is not nice thing "
// with var you van deal with variable before declaring it  .


var person = 'bassem ' 

person = 'jan'

var person = 'hassan'

console.log(person)  /// hassan will be printed .. this would be produce an error if we use let . 


if(10===10 ){

    var firstName = 'bassem'
}

console.log(firstName)         // bassem will be printed .. because var is a function scope ,, if there is no function >> there is no scope . 


let setName = function(){

    var secondName = 'mohamed'
}

// console.log(secondName)   // error , secondName doesn't exist . 



console.log(thirdName  )   // undefined instead of error .. it will recognize the thridName  but not printing its value .  

var thirdName = 'bassemhusseinhamed'