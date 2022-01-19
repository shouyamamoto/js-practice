/* let obj = {x : 2, y: 3} と等価のオブジェクトを作る*/
let obj = Object.create(Object.prototype, {
  x: { value: 2, configurable: true, writable: true, enumerable: true },
  y: { value: 3, configurable: true, writable: true, enumerable: true },
})

console.log(obj);
