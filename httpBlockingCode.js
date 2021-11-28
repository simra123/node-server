const http = require('http');

const server = http.createServer((req , res)=>{
    if(req.url == "/"){
        res.write('shiranaai')
        res.end()
    }
    if(req.url == '/about'){
        //BLOCKING CODE
        for(let i = 0; i < 10 ; i++) {
            console(`|`)
            for(let j = 0; j < 10 ; j++) {
            console.log(`_____`)
            }
            
        }
        res.write('fuck off')
        res.end()
    }else{
    res.write('die')
    res.end()
    }
   
})

server.listen(5000, ()=>{
    console.log(`server running on port 5000...`)
})