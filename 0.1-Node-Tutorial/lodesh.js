const _ = require('lodash')

const items = [1 , [2 , [3 , [4 , [5 , [6]]]]]]

const flattenItems = _.flattenDeep(items)
console.log(flattenItems)
console.log('dejdiji')