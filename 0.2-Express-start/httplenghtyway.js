const http = require('http')
const {readFileSync} = require('fs')
//in asynchronous we will mustly have to use catch error
//and in synchronos whoch is readFile, we can use it without try catch 
const File = readFileSync('./public/index.html')

http.createServer((req , res) => {
    if (req.url == '/') {
        console.log(`user hit the server`)
        res.writeHead(200 , {'content-type' : 'text/html'})
        res.write(File)
         res.end()
    } else {
        console.log(`user hit the server`)
        res.writeHead(404 , {'content-type' : 'text/html'})
        res.write(`<h1> NOT FOUND </h1>`)
         res.end()
    }
    
}).listen(5000 , ()=> {
    console.log(`starting....`)
})