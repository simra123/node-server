const asyncWrapper = (func) => {
    return async (req, res, next) => {
        try {
            await func(req, res, next)
        } catch (error) {
            //pass the error to other middleware
            next(error)
        }
    }
}
module.exports = asyncWrapper