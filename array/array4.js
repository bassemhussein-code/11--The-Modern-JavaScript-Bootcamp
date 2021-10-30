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


const findNote = function(notes , noteTitle){


   const index =  notes.findIndex(function(item, index){

        return item.title === noteTitle
     })

     return notes[index]


}


const note = findNote(notes, 'habits to work with')

console.log(note)            // turn
