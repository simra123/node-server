//const http = require('http');
const {readFileSync} = ('fs')

// const server = http.createServer((req,res) => {
//     if(req.url == '/'){
//         res.end('wekcome tp the fuckinly fucked up land')
   
//     }
//     if(req.url == '/about'){
//         res.end('about shit')

//     } else{
//     res.end(
//         `<h1>we con not find the page you are looking for</h1>
//         <p>oppppsss</p>
//         <a href="/"> back home </a>`
//     )
//     }
// })

// server.listen(5000)

// emit approch
const http = require('http');

const server = http.createServer()

server.on((req , res) => {
   const text = readFileSync('./content/big.txt' , 'uft8')
   res.end(text)
}).listen(5000 , () => {
    console.log('starting...')
})