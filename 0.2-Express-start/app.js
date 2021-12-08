const express = require('express')
const app = express()
const path = require('path')
const PeopleApis = require('./routes/people')
const Auth = require('./routes/auth')

//express urlEncoded gets the post data and save it in req body when extended:false is passed on
app.use(express.urlencoded({extended: false}))

///does the same thing like urlEncoded but for axios
app.use(express.json())

//static fronend
app.use(express.static(path.join(__dirname, 'public')))

//add the middle ware in people apis cause the basepath matches
app.use('/api/people' , PeopleApis)

//add the middle ware in login apis cause the basepath matches
app.use('/login' , Auth)

app.listen(5000 , ()=>{
    console.log(`server is listening to the port 5000...`)
})


