
class customApiError extends Error {
    constructor (msg, statusCode) {
        super(msg)
        this.statusCode = statusCode
    }
}

const createCustomError = (message, statusCode) => {
    return new customApiError(message, statusCode)
}

module.exports = { createCustomError, customApiError }
