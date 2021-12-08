const { log } = require('console')
const path = require('path')

console.log(path.sep)

//basically .join and .resolve do the same thing, just dont get confused 
const filePath = path.join('content','shine' , 'text.txt')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const rev = path.resolve(__dirname , 'cidid' , 'uuede' , 'file.html')
console.log(rev)