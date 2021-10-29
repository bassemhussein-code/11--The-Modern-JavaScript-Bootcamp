let myAccount = {
    name : "bassem" , 
    expenses : 0 , 
    income : 0 
}

let addExpense = function(account , amount ){
account.expenses = account.expenses + amount ; 

console.log(account)
}



addExpense(myAccount  , 5)


console.log(myAccount)

