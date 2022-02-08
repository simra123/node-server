const notFound = (req, res) => {
    res.status(404).send(`<h1>the page you are looking for is not found </h1>`)
}

module.exports = notFound