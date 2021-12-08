const express = require('express')
const app = express()
const path = require('path')

// app.get('/',  (req , res) => {
//     res.status(200).send(Homepage)
// })

//set up static middleware 
app.use(express.static(path.join(__dirname, 'public')))

//in express instead of fs readfile we can use app.sendfile like :
// app.get('/',  (req , res) => {
//     res.sendFile(path.resolve(__dirname, 'app' , 'index.html' ))
// })

app.all('*',  (req , res) => {
    res.status(404).send(`Not Found`)
})

app.listen(5000 , () => {
    console.log(`starting...`)
})