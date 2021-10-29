let myAccount = {
    name : 'bassem' ,
    expenses :  50 , 
    income : 50
}


let addIncome =function(account , income ) {

    account.income = account.income + income; 
    console.log(account)
}

let resetAccount = function(account ){

    account.expenses = 0 
    account.income =  0
    console.log(account)
} 

let getAccountSummary = function(account){


    console.log(`your name is ${account.name} and your expenses are ${account.expenses} and your income is ${account.income}`)
}


getAccountSummary(myAccount) // summary .... 

addIncome(myAccount, 50)    // income === 100 ? 
addIncome(myAccount, 100)   // income === 200 ? 

resetAccount(myAccount)     // income === 0 ? and expenses === 0 ? 


