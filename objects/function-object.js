let myBook = {
    title : '1853', 
    author : "bassem " , 
    pageCount : 332 
}
let myBook2 = {
    title : '1853', 
    author : "sabek " , 
    pageCount : 655
}

let getSummary = function (book){           // passing an object to the funcation 

    console.log(`${book.title} , ${book.author}`)    
}


getSummary(myBook);
getSummary(myBook2);


let getSummaryPartTwo = function(book){

    return {

        summary: `${book.title} , ${book.author}`, 
        pageCountSummary: `${book.title} is ${book.pageCount}` 

    }
}


console.log(getSummaryPartTwo(myBook));
console.log(getSummaryPartTwo(myBook2));