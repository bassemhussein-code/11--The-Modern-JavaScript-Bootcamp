let name = 'bassem'; 

if(true){

    let name = 'hussein'   // using another variable in this scope called name which value "hussien"
    if(true){
        name  = 'hamed'  // assigning the variable name in this scope 
        console.log(name)
    }
}
if(true){
    console.log(name)   // printing the global variable

}
 
//global

   //local

      //local


   //local


console.log('#'.repeat(10))

   if (true ){

      if(true){

        user = 'hussien'   // if we use a variable in a scope without it was declared before .. the interpreter searches for the variable if it doen't find anything .. interpreter declare it .

        console.log(user)
      }

   }

   if(true){

console.log(user)
   }


   // note that if you forget 'let' . you will face problems in your code that you don't expect 