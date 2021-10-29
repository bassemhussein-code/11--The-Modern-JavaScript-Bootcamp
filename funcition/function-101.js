let getScoreText = function(name = 'Ananomous ', score =0) {

    console.log(`name: ${name} and your score is ${score}`);
}


  getScoreText() ; 
getScoreText('Bassem' ,67);


let getTip = function(total , tipPercent =0.2 ){

    let percent = tipPercent * 100 ;
    let tip = total * tipPercent ; 
    return `A ${percent}% tip on $${total} would be $${tip}` ; 

}


console.log(getTip(100));

let name = 'Bassem'
console.log(`my name is ${name}`)

let result1 = getTip(300)
console.log(result1);
