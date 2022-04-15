const express = require('express')
const app = express()
require('dotenv').config()
const error_handler = require('./middleware/error_handler')
const not_found = require('./middleware/not_found')
const jobsRouter = require('./routes/jobs')
const loginRouter = require('./routes/auth')
const connectDb = require('./db/connect')
const authentication = require('./middleware/authentication')

const port = 5000 || process.env.PORT
//to get post data
app.use(express.json())

//routes 
app.use('/api/v1/auth', loginRouter)
app.use('/api/v1/jobs', authentication, jobsRouter)

//middle wares
app.use(error_handler)
app.use(not_found)

const startServer = async () => {
    try {
        await connectDb(process.env.MONGO_URL)
        app.listen(port, console.log(`database connected `))

    } catch (error) {
        console.log(error)
    }
}
startServer()
