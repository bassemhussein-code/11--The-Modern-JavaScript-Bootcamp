let password = "12344367bassem###@*"

console.log(password.length);


let isValidPassword = function(password) {

    return (password.length>=16) && !(password.includes('password'))
}


console.log(isValidPassword(password)) ;     // true 

password = 'password1238543867'


console.log(isValidPassword(password));     // false 

password = '234324'

console.log(isValidPassword(password)) ;   // false because the length .
