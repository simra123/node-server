const express = require('express')
const app = express()
const connectDB = require('./db/connet')
const mainRouter = require('./routes/main')
const handle_error = require('./middleware/error')
const notFound = require('./middleware/not_found')
require('dotenv').config()

const port = process.env.port || 5000
//middleware
app.use(express.json())

app.use('/api/v1', mainRouter)
app.use(handle_error)
app.use(notFound)

const startServer = async () => {
    try {
        await app.listen(port, console.log(`server is running on port ${ port }`))
    } catch (error) {
        console.log(error)
    }
}
startServer()