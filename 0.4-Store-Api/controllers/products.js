const Products = require('../modals/products')

const getAllProductsStatic = async (req, res) => {
    //manual api approch
    //greater than represent as $gt and $lt as lesser than
    const allProducts = await Products.find({ price: { $gt: 30 } })
        .sort(' price')
        .select('company name price')
        .limit(28).skip(0)
    res.status(200).json({ allProducts, count: allProducts.length })
}

const getAllProducts = async (req, res) => {
    const { featured, company, name, sort, fields, numericFilters } = req.query
    const queryObject = {}
    console.log(queryObject)
    if (featured) {
        queryObject.featured = featured == 'true' ? true : false
    }
    if (company) {
        queryObject.company = company
    }
    if (name) {
        //using regex to get name data with alphabets
        queryObject.name = { $regex: name, $options: 'i' }
    }
    //numeric filters 
    //we have user friendly filters like > >= < but we have to convert em so the mongo could understand
    if (numericFilters) {
        console.log(numericFilters)
        //swap the values of user to mongo
        const operatorMap = {
            '>': '$gt',
            '>=': '$gte',
            '<': '$lt',
            '<=': '$lte',
            '=': '$eq',
        }
        //passing the values in that manner 
        //telling the replace to select any of the passed value globally 
        const regEx = />|>=|<|<=|=/g
        //using js replace
        let replacedVals = numericFilters.replace(
            regEx,
            (match) => `-${ operatorMap[match] }-`
        )
        console.log(replacedVals)
        //items which can be filtered thru this 
        const options = ['price', 'rating']
        //spit our items on comma
        replacedVals = replacedVals.split(',').forEach((item) => {
            // and use for each to get each value sparatly field=price operator = < value = number
            const [field, operator, value] = item.split('-')
            if (options.includes(field)) {
                //dynamically setting query so the mongo could understand
                queryObject[field] = { [operator]: Number(value) }
            }
        })

    }
    let result = Products.find(queryObject)

    //if sorting queristes exists
    if (sort) {
        //syntax in sort function is split by komma so we will do the same
        const sortList = sort.split(',').join(' ')
        result = result.sort(sortList)
    } else {
        result.sort('createAt')
    }

    //fields 
    if (fields) {
        const fieldsList = fields.split(',').join(' ')
        result = result.select(fieldsList)
    }

    //pagination and limit filters
    //setting or operater for deafault
    const page = Number(req.query.page) || 1
    const limit = Number(req.query.limit) || 10
    const skip = (page - 1) * limit
    //1 - 1 = 0 x 10 = 0 skipped 0
    //2 - 1 = 1 x 10 = 10 skipped 10 on page 2
    //3 - 1 = 2 x 10 = 20 skipped 20 on page 3

    result = result.limit(limit).skip(skip)


    console.log(queryObject)
    const filterProducts = await result
    res.status(200).json({ filterProducts, nbHits: filterProducts.length })
}

module.exports = {
    getAllProducts,
    getAllProductsStatic
}