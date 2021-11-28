const {readFileSync , WriteFileSync, writeFileSync } = require('fs');
console.log('start')
//shows the existing file
const first = readFileSync('./file.txt' , 'utf8')
console.log(first)

// creates a new file
const write = writeFileSync('./dot.txt' , `here is the resukt ${first}`)
console.log(write)
console.log('ended')