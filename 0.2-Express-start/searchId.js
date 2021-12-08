const express =  require('express')
const app = express()
const Products = require('./products')

app.get('/api/products/:id', (req , res) => {

   //destructure the id from object
   const {id} = req.params
   //find the search id
   const singleProduct = Products.find((pro) => pro.id == Number(id))
   console.log(id)

   //send the matched id and send error on undefine
   if(!singleProduct){
       res.status(404).send(`Products not found`)
   }else {
    res.status(200).json(singleProduct)
   
   }

})
app.listen(5000,()=>{
    console.log(`server is listening to the port 5000...`)
})