require('dotenv').config()
const connectDB = require('./db/connect')
const productsArray = require('./products.json')
const products = require('./modals/products')


const start = async () => {
    try {
        await connectDB(process.env.store_URL)
        //first deleting any gibberish there is
        await products.deleteMany()
        //uploading the hardcoded products into the database
        await products.create(productsArray)
        console.log('success')
        //process ended with success
        process.exit(0)
    } catch (error) {
        console.log(error)
        //process ended with success
        process.exit(1)
    }
}
start()