var readBooks = require('./callback')

var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}   
]

var time = 10000
var idx = 0

function panggil(time, books){
    if( idx < books.length){
        readBooks(time, books[idx], function(timeout){
            if (timeout>0){
                time-=books[idx].timeSpent
                idx++
                panggil(time, books, idx)
            }
        })
    }
}

panggil(time, books)