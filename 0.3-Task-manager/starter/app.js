const express = require('express')
const app = express()
const tasks = require('./routes/task')
const connecDB = require('./db/connect')
const notFound = require('./middeware/notFound')
const errorHandler = require('./middeware/error-handler')
require('dotenv').config()
const port = 5000
//getting the data from frontapp
app.use(express.urlencoded({ extended: false }))

///does the same thing like urlEncoded but for axios
app.use(express.json())

app.use('/api/v1/tasks', tasks)

//api error handler
app.use(errorHandler)

//not found middleware
app.use(notFound)

app.listen(5000, async () => {
    try {
        await connecDB(process.env.MONGO_URl)
        console.log(`connected to database on port ${ port }...`)

    } catch (error) {
        console.log(error)
    }
})
