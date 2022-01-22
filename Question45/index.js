// {p: 42}となるようなオブジェクトをObjectメンバを使って生成してください
const o = {};
Object.create(Object.defineProperty(o, "p", {
  value: 42,
  enumerable: true,
}))
console.log(o);

