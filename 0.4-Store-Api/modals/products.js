const mongoose = require('mongoose')

const productsScheme = new mongoose.Schema({
    name: {
        type: String,
        require: [true, 'name must be provided'],
    },
    price: {
        type: Number,
        require: [true, 'product price must be provided']
    },
    featured: {
        type: Boolean,
        default: false
    },
    rating: {
        type: Number,
        default: 4.5
    },
    createAt: {
        type: Date,
        default: Date.now()
    },
    company: {
        type: String,
        enum: {
            values: ['ikea', 'liddy', 'caressa', 'marcos'],
            message: '{VALUES} is not supported'
        }
    }
})
module.exports = mongoose.model('products', productsScheme)