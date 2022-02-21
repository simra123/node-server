const { CustomAPIError } = require('../errors')
const StatusCodes = require('http-status-codes')
const errorHandler = (err, req, res, next) => {
    if (err instanceof CustomAPIError) {
        return res.status(err.statusCode).json({ msg: err.message })
    }
    console.log(err.message)
    return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ msg: 'something went wromg pleasetry again later' })
}

module.exports = errorHandler