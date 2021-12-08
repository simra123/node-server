const express = require('express')
const app = express()
const {authorized , myLogger} = require('./Middleware/middlewareFunstions')




//instead of passing the middleware in every route just use the app.use() instead
//it will automactically  pass the it to all routes
app.use( [ myLogger , authorized]) 
//if the basename "/api" matches any route, it will apply on it only

app.get('/', (req, res) => {
    res.send(`HOe`)
})
app.get('/api/about/query', (req, res) => {
    res.send(`Bout`)
})
app.get('/api/products/query', (req, res) => {
    res.send(`products`)
})

app.listen(5000 , ()=>{
    console.log(`server is starting on port 5000...`)
})