const notFound = ( req, res ) => {
    res.status( 404 ).send( 'the page you are looking for is not found' )
}
module.exports = notFound