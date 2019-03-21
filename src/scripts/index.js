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

console.info(`%c
// const - must be declared and initialized and cannot be changed
`,
'color:#fff; background:dodgerblue;')
console.log(`// const a = 5
// a = 4 // error`)

console.info(`%c
// let has block scoping - variable only recognized inside block
`,
'color:#fff; background:dodgerblue;')
console.log(`// if (true) {
//   let b = 5
// }
// console.log(b) // error`)

console.info(`%c
// var does not have block scoping
`,
'color:#fff; background:dodgerblue;')
console.log(`// console.log(c) // undefined
// if (true) {
//   var c = 5
// }
// console.log(c) // 5`)

// rest parameters - creates an array for arguments passed to function
// rest params must be the last argument
console.info(`%c
// rest parameters - creates an array for arguments passed to function
// rest params must be the last argument
`,
'color:#fff; background:dodgerblue;')
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
console.info(`%c
// destructuring arrays - assigning array elements to variables
`,
'color:#fff; background:dodgerblue;')
console.log(`let ids = [1, 2, 3]
let [id1, id2, id3] = ids`)
console.log(id1, id2, id3)

let aIds, remainingIds
[aIds, ...remainingIds] = ids
console.log('// use alongside rest parameters')
console.log(`let id1, remainingIds
[aIds, ...remainingIds] = ids`)
console.log(aIds, remainingIds)

let bIds
[, ...bIds] = ids
console.log('// skip the first element in the destructuring')
console.log(`let bIds
[, ...bIds] = ids`)
console.log(bIds)

// destructuring objects
console.info(`%c
// destructuring objects
var id is assigned from the id property of the object
var prop1 is assigned from the prop1 property of the object
`,
'color:#fff; background:dodgerblue;')
console.log(`let aObj = { id: 10000, prop1: 'some string' }
let { id, prop1 } = aObj
console.log(id, prop1)`)
let aObj = { id: 10000, prop1: 'some string' }
let { id, prop1 } = aObj
console.log(id, prop1)

console.log(`

wrap object destructuring in parentheses to tell compiler to destructure, not treat it as a code block

let aObj2 = { aId: 10000, aProp1: 'some string' }
let aId, aProp1
({ aId, aProp1 } = aObj2)
console.log(aId, aProp1)
`)
let aObj2 = { aId: 10000, aProp1: 'some string' }
let aId, aProp1
({ aId, aProp1 } = aObj2)
console.log(aId, aProp1)

// spread syntax
console.info(`%c
// spread syntax
iterates through iterables - opposite of rest parameter
`,
'color:#fff; background:dodgerblue;')
console.log(`function aFunc (i1, i2, i3, ...iRest) {
  console.log(i1, i2, i3, iRest)
}
let cIds = [100, 200, 300]
let aString = 'abcdefg'
aFunc(...cIds)
aFunc(...aString)
`)
function aFunc (i1, i2, i3, ...iRest) {
  console.log(i1, i2, i3, iRest)
}
let cIds = [100, 200, 300]
let aString = 'abcdefg'
aFunc(...cIds)
aFunc(...aString)

// typeof
// determine the type of a variable
console.info(`%c
// typeof
// determine the type of a variable
`,
'color:#fff; background:dodgerblue;')
console.log(`console.log(typeof (1))
console.log(typeof (true))
console.log(typeof ('hi'))
console.log(typeof (() => {}))
console.log(typeof ({}))
console.log(typeof ([]))
console.log(typeof (class AClass { constructor (name) { this.name = name } }))
console.log(typeof (null))
console.log(typeof (undefined))
console.log(typeof (NaN))`)
console.log(typeof (1))
console.log(typeof (true))
console.log(typeof ('hi'))
console.log(typeof (() => {}))
console.log(typeof ({}))
console.log(typeof ([]))
console.log(typeof (class AClass { constructor (name) { this.name = name } }))
console.log(typeof (null))
console.log(typeof (undefined))
console.log(typeof (NaN))

// common tupe conversions
console.info(`%c
// common tupe conversions
`,
'color:#fff; background:dodgerblue;')
console.log(`var foo = 5
foo.toString()
console.log(foo)
foo = '43llkk'
console.log(Number.parseInt(foo, 10))
foo = '23.1llkk'
console.lot(Number.parseFloat(foo))
foo = 'llkk23.1llkk'
console.log(Number.parseFloat(foo))`)
var foo = 5
foo.toString()
console.log(foo)
foo = '43llkk'
console.log(Number.parseInt(foo, 10))
foo = '23.1llkk'
console.log(Number.parseFloat(foo))
foo = 'llkk23.1llkk'
console.log(Number.parseFloat(foo))

// controlling loops
console.info(`%c
// controlling loops
// breaking out of loop and continue

1 is skipped on continue to the end of loop iteration
the loop is broken out on 3
`,
'color:#fff; background:dodgerblue;')
console.log(`let i = 0
for (; i < 4; i++) {
  if (i === 1) {
    continue
  }
  if (i === 3) {
    break
  }
  console.log(i)
}
console.log(i)`)
let i = 0
for (; i < 4; i++) {
  if (i === 1) {
    continue
  }
  if (i === 3) {
    break
  }
  console.log(i)
}
console.log(i)

// OPERATORS
// Equlity
// Unary
// Logical
// Relational
// Conditional
// Assignment
// Operator precedence

console.info(`%c
// OPERATORS
// Equlity
// Unary
// Logical
// Relational
// Conditional
// Assignment
// Operator precedence

`,
'color:#fff; background:dodgerblue;')
console.log(`
// Equality
var var1 = 2
var var2 = '2'
if (var1 == var2) {} // type conversion - true
if (var1 === var2) {} // no type conversion - false
if (var1 != var2) {} // type conversion - false
if (var1 !== var2) {} // no type conversion - true

`)
console.log(`
// Unary
++var1  - increment
var1++  - incremented after use
--var1  - decrement
var1--  - decrement after use
+var1   - convert to numeric type
-var1   - change sign of numeric variable

`)
console.log(`
// Logical (boolean)
if (var1 > 5 && var2 < 100) {}                
- AND

if (var1 > 5 || var2 < 100) {}                
- OR

if (var1 > 5 || var2 < 100 && var3 === 2) {}  
- AND (precendence) over OR

var1 && var2                                  
- returns var2 if both are truthy

var1 || var2                                  
- returns var1 if valid, else var2

!var1                                         
- returns opposite boolean of var1

`)
console.log(`
// Relational
> < >= <=
'Zoo' < 'alpha' // true - ascii value comparison
'Zoo'.toLowerCase() < 'alpha'.toLowerCase() // false

`)
console.log(`
// Conditional
var result = (foo > 5) ? true : false

`)
console.log(`
// Assignment
var1 += 10 - increment by
var1 -= 10 - subtract by
var1 /= 10 - divide by
var1 *= 10 - multiply by
var1 %= 10 - remainder (modulus)
var1 <<= 1 - shift bits left by
var1 >>= 1 - shift bits right by

`)
console.info(`%c
// Operator Precedence
// see link
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#Table
`,
'color:#fff; background:dodgerblue;')
console.info(`%c
// Function Scope
// see link
https://developer.mozilla.org/en-US/docs/Glossary/Scope
`,
'color:#fff; background:dodgerblue;')
console.info(`%c
// Block Scope
// see link
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/block
`,
'color:#fff; background:dodgerblue;')
console.info(`%c
// IIFE
// Immediately-Invoked Function Expression
// see link
https://developer.mozilla.org/en-US/docs/Glossary/IIFE
`,
'color:#fff; background:dodgerblue;')

let iffe = (() => {
  let id = 123
  function inner1 () {
    return console.log('inner1 - id: ' + id)
  }
  function inner2 () {
    return console.log('inner2 - id: ' + id)
  }
  return { inner1, inner2 }
})()

console.log(iffe.inner1())
console.log(iffe.inner2())

console.info(`%c
// Closures
// see link
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
`,
'color:#fff; background:dodgerblue;')
console.log(`
let module = (() => {
  let id = 11002
  let getId = () => {
    return id
  }
  return {
    func: getId
  }
})
console.log(module.func())

- variable "module" is set to the return value of the IIFE...
- ...including reference to the function "getId()" which returns the block-scoped var "id" 
`)
let module = (() => {
  let id = 11002
  let getId = () => {
    return id
  }
  return {
    func: getId
  }
})()
console.log(module.func())

console.info(`%c
// The "this" keyword
// Important to note that the arrow function in JS does not bind "this" to its own context, but rather the lexical context outside it
(code block, origin function, ...)
`,
'color:#fff; background:dodgerblue;')
console.log(`
let o = {
  id: 123,
  getId: function () {
    console.log(this)
    return this.id
  }
}
console.log(o.getId())
`)
let o = {
  id: 123,
  getId: function () {
    console.log(this)
    return this.id
  }
}
console.log(o.getId())

console.info(`%c
// call and apply
// run the function and change the "this" of that function
`,
'color:#fff; background:dodgerblue;')
console.log(`

// call function inside object with different context (bO)
let aO = {
  id: 123,
  getId: function () {
    return this.id
  }
}
let bO = { id: 456 }
console.log(aO.getId.call(bO))

// apply new context and pass arguments as well
let cO = {
  id: 123,
  getId: function (...rest) {
    let sum = rest.reduce((x, y) => { return x + y })
    return \`id: \${ this.id }, sum: \${ sum }\`
  }
}
let dO = { id: 456 }
console.log(cO.getId.apply(dO, [20, 21, 24]))

`)
// call function inside object with different context (bO)
let aO = {
  id: 123,
  getId: function () {
    return this.id
  }
}
let bO = { id: 456 }
console.log(aO.getId.call(bO))

// apply new context and pass arguments as well
let cO = {
  id: 123,
  getId: function (...rest) {
    let sum = rest.reduce((x, y) => { return x + y })
    return `id: ${this.id}, sum: ${sum}`
  }
}
let dO = { id: 456 }
console.log(cO.getId.apply(dO, [20, 21, 24]))

console.error('SCROLL TO THE TOP ^^')
