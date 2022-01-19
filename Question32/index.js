/**
 * const obj = { x : 2}
 * の属性を出力する
 */

const obj = { x: 2 }
for (property in obj) {
  console.log(property);
}
console.log(Object.getOwnPropertyDescriptor(obj, "x"))
