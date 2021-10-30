let notes = ['note1 ' , 'note 2 ', 'note 3 ' ]

console.log(notes.length) 
console.log(notes) 
notes.pop()
console.log(notes.length) 
console.log(notes)
notes.push('new note')
console.log(notes.length) 
console.log(notes)

notes.shift()
console.log(notes.length) 
console.log(notes)

notes.unshift('new note 1')
console.log(notes.length) 
console.log(notes) 



notes.splice(1,0,'this is the second item ')    // delete no thing and insert an item .

console.log(notes.length) 
console.log(notes)

