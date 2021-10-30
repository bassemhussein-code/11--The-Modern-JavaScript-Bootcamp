const notes =[ {} , 
    {
    title: 'my next trip '  , 
    body : "i would like to travel to spain"
}, {
    title: "habits to work with" , 
    body: " Reading , working ,studying "

}, {
    title: "Office modificaition" , 
    body: "Get a new seat "
}]



console.log(notes.indexOf({}))      // not return the first item (object)  because the object can't equal anoter object unless their addresses are equal .

let index = notes.findIndex(function(item , index ){


    return item.title === "habits to work with"
   
    

})

console.log(index)                  // returing the index of the item which its tite === " the required title"

