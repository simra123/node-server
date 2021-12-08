
//always pass next() in the middle ware if you are not using
// the res,send() thenn simply pass it to the app.get()
const authorized = (req, res, next) =>{

    const {user} = req.query
    if(user == 'jonny'){
        req.user = {name : 'jonny' , id : 3}
        next()
    }else{
        res.status(401).send(`unauthorize user`)
    }
    
}

const myLogger = (req , res , next)=> {
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear()
    console.log(method , url , time)
    next()
}

module.exports = {authorized , myLogger}