//const http = require('http');
const {createReadStream} = require('fs')

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

http.createServer((req , res) => {
    const text = createReadStream('./content/big.txt' , 'utf8')
    
    text.on('open', () => {
     text.pipe(res)
    })

    text.on('error' , (err) => {
        res.end(err)
    })
}
).listen(5000 , () => {
     console.log('starting...')
 })
