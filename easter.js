// import readline-sync module, don't touch!
const READLINE = require("readline-sync");

// Write your program below!
MOM = READLINE.question("CHOOSE A YEAR!")
// #1
let y = MOM
// #2
let a = y % 19
// #3
let b = y / 100
let c = y % 100
// #4
let d = b / 4
let e = b % 4
// #5
let f = (b+8) / 25
// #6
let g = (b-f+1) / 3
// #7
h1 = 19 * a
let h = (h1+b-d-g+15) % 30
// #8
let i = c / 4
let k = c % 4
// #9
r1 = 2*e
r2 = 2*i
let r = (32+r1+r2-h-k) % 7
// #10
let m = (a+11*h+22*r) / 451
// #11
let n = (h+r-7*m+114) / 31
let p = (h+r-7*m+114) % 31
console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)
console.log(f)
console.log(g)
console.log(h)
console.log(i)
console.log(k)
console.log(r)
console.log(m)
console.log(n)
console.log(p)