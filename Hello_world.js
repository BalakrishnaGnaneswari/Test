
console.log('hello world');
const fs = require('fs');
fs.appendFile('test.txt', 'hai test', (err) => {
    if (err) return console.error(err)
})
fs.readFile('./test.txt', 'utf8', (data, err) => {
    if (err) return console.error(err)
    console.log(data)
})
fs.appendFile('./test.txt', '\nhai test2bye', (err) => {
    if (err) return console.error(err)
})

fs.readFile('./test.txt', 'utf8', (data, err) => {
    if (err) return console.error(err)
   
    console.log(data)
})
