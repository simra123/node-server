const {createReadStream} = require('fs')

const text = createReadStream('./content/big.txt' , { highWaterMark : 8000 })

text.on('data' , (result) => {
   console.log(result)
})
text.on('error' , (err) => {
    console.log(err)
 })