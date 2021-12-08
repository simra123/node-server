const express = require('express')
const app = express()
const Products = require('./products')

app.get('/api/products/query' , (req,res) => {
  const {search , limit} = req.query
  let sortedProducts =  [...Products]
  if(search){
      sortedProducts = Products.filter((products)=>{
        return products.name.startsWith(search)
      }) 
  }
  if(limit){
      sortedProducts = sortedProducts.slice( 0 , Number(limit))
  }
  if(sortedProducts.length < 1){
    return  res.status(200).json({success: true, data: []})
  }

  res.status(200).json(sortedProducts)
  
})

app.listen(5000 , () => {
    console.log(`server is listening to the port 5000..`)
})