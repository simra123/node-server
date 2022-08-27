const { customApiError } = require('../errors/customErrorHandler')

const errorHandler = (err, req, res, next) => {
    if (err instanceof customApiError) {
        return res.status(err.statusCode).json({ msg: err.message })
    }
    else{
        console.log('err')
    }
    return res.status(500).json({ msg: 'something went wrong, try again later' })
  
}
module.exports = errorHandler
