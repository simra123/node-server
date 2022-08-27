// const array = [1, 33, 44, 55, 33, 44, 2]

// const removeDuplicates = array.filter((value, index, arr) => arr.indexOf(value) == index)
// console.log(removeDuplicates)

// const findMax = (arr) => {
//     let max = arr[0]
//     for (i = 0; i <= arr.length; i++) {
//         if (max < arr[i]) {
//             max = arr[i]
//         }
//     }
//     return max
// }
// console.log(findMax([1, 33, 44, 55, 33, 44, 2]))

// let a = 6
// let b = 9
// a = b + a
// b = a - b
// a = a - b
// console.log(`a is ${ a } and b is ${ b }`)

// const findMissing = (arr) => {
//     let c = 0
//     let list = []
//     for (i = arr[0]; i <= 10; i++) {
//         if (arr[c] == i) {
//             c++
//         }
//         else {
//             list = [...list, i]
//         }
//     }
//     return list
// }
// console.log(findMissing([1, 3, 4, 5, 6, 7, 10]))
const myDate = new Date("2022-07-18T22:00:31.783Z")
myDate.setMinutes(myDate.getMinutes() + 1)
// function addMinutes(numOfMinutes, date) {
//   date.setMinutes(date.getMinutes() + numOfMinutes)

//   return date
// }
console.log(myDate)
