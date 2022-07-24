const user = {

    name : "Bassem" , 
    age  : 23 
}

const userJSON = JSON.stringify(user)

// localStorage.setItem("user",userJSON)

const returnedUser = localStorage.getItem('user')
const user1 = JSON.parse(returnedUser)
console.log(`user ==> ${user1.name} and his age ==> ${user1.age}`)
