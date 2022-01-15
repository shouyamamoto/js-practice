// const a = { a: 'a' }とconst b = { b: 'b' } をマージしたc を出力してください e.g{ a:'a', b:'b' }const a = { a: 'a' }とconst b = { b: 'b' } をマージしたcを出力してください 
const a = { a: "a" }
const b = { b: "b" }
const c = { ...a, ...b }
console.log(c)
