var readBooksPromise = require('./promise')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]

var time = 10000
var idx = 0;

function panggil(time, books) {
    if(books.length>idx){
        readBooksPromise(time, books[idx])
        .then (function (timeout){
            if(timeout>0){
                time-=books[idx].timeSpent
                idx++
                panggil(time, books, idx)
            }
        }).catch(function(error){
            if(error){
                console.log(error.message);
            }
        })
    }
}

panggil(time,books)