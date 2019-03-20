import '../styles/index.scss'

// const - must be declared and initialized and cannot be changed
// const a = 5
// a = 4 // error

// let has block scoping - variable only recognized inside block
// if (true) {
//   let b = 5
// }
// console.log(b) // error

// var does not have block scoping
// console.log(c) // undefined
// if (true) {
//   var c = 5
// }
// console.log(c) // 5

console.warn(`// const - must be declared and initialized and cannot be changed`)
console.log(`// const a = 5
// a = 4 // error`)

console.warn(`// let has block scoping - variable only recognized inside block`)
console.log(`// if (true) {
//   let b = 5
// }
// console.log(b) // error`)

console.warn(`// var does not have block scoping`)
console.log(`// console.log(c) // undefined
// if (true) {
//   var c = 5
// }
// console.log(c) // 5`)

// rest parameters - creates an array for arguments passed to function
// rest params must be the last argument
console.warn(`// rest parameters - creates an array for arguments passed to function
// rest params must be the last argument`)
console.log(`function cars (day, ...ids) {
  ids.forEach(id => console.log(id))
  console.log(day)
}
cars('Sunday', 3, 5, 7)`)
function cars (day, ...ids) {
  ids.forEach(id => console.log(id))
  console.log(day)
}
cars('Sunday', 3, 5, 7)

// destructuring arrays - assigning array elements to variables
let ids = [1, 2, 3]
let [id1, id2, id3] = ids
console.warn(`// destructuring arrays - assigning array elements to variables`)
console.log(`let ids = [1, 2, 3]
let [id1, id2, id3] = ids`)
console.log(id1, id2, id3)

let a, remainingIds
[a, ...remainingIds] = ids
console.log(`let id1, remainingIds
[a, ...remainingIds] = ids`)
console.log(a, remainingIds)
