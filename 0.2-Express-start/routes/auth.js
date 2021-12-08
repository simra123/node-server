const express = require('express')
const router = express.Router()

//post req method without axios
router.post('/' , (req , res) =>{
    console.log(req.body)
    const {login} = req.body
    if(login){
      res.status(200).send(`welcome ${login}`)
     
    }else{
        res.status(404).send(`user undefine`)
    }
})

module.exports = router