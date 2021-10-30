let makeGuess = function (num){


    let min = 1 ;
    let max = 5 ; 

  return  ( (Math.floor(Math.random() *(max - min + 1 )) + min) === num )  

}


console.log(makeGuess(1))
console.log(makeGuess(2))
console.log(makeGuess(3))
console.log(makeGuess(4))
