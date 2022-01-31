const express = require('express')
const app = express()
const notFound = require('./middleware/notFound')
const connectDB = require('./db/connect')
const productRouter = require('./routes/products')
const errorHandler = require('./middleware/error-handler')
require('dotenv').config()
require('express-async-errors')
const port = 5000
app.use(express.json())

app.get('/', (req, res) => {
    res.send('<h1>connected </h1>')
})

app.use('/api/v1/products', productRouter)
app.use(errorHandler)
app.use(notFound)

app.listen(port, async () => {
    try {
        await connectDB(process.env.store_URL)
        console.log(`connected to db on port ${ port }...`)
    } catch (error) {
        console.log(error)
    }
})