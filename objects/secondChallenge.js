let converFahrenhit = function (fahrenhit){
   return {
       fahrenhit : fahrenhit , 
       kalvin :(fahrenhit + 495.67)* (5/9) ,
       calcuis : (fahrenhit -32) * (5/9)
   }
   
}

console.log(converFahrenhit(54))

console.log(converFahrenhit(90))