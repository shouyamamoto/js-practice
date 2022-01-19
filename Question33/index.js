/**
 * var obj2 = {x : 2};に
 * Objectメソッドを用いて
 * 
 * プロパティy、値2、
 * プロパティ追加可能を定義して、
 * Objectメソッドで情報(値と属性)を返してください
 */

const obj2 = { x: 2 }
Object.defineProperty(obj2, "y", {
  value: 2,
  enumerable: true
})
for (property in obj2) {
  console.log(`${property}: ${obj2[property]}`)
}
console.log(Object.getOwnPropertyDescriptor(obj2, "y"));