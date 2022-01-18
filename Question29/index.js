/*
  このobjをプロパティ追加不可、削除変更は可能にし、
  プロパティ追加不可か否かの判定メソッドでtrueが返る事を
  確認した後、objのkeyを列挙してください。
*/
let obj = { x: 2, y: 3 };
Object.preventExtensions(obj);
console.log(Object.isExtensible(obj)); // false
Object.keys(obj) // [ 'x', 'y' ]

// let obj2 = {
//   x: 100,
//   y: 200,
//   z: {
//     a: "moriken"
//   }
// }
// Object.preventExtensions(obj2);
// console.log(Object.isExtensible(obj2), Object.isExtensible(obj2.z)); //false true

/*
  Object.preventExtensions()
  オブジェクトへの追加（拡張）を防ぐ。既存のプロパティを変更・削除することは可能。

  Object.seal()
  https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/seal
  オブジェクトを封印して、新しいオブジェクトを追加することを抑制し、すべての既存のプロパティを設定変更不可にします。
  現存するプロパティの値は、書き込み可能である限り変更できます。

  Object.freeze()
  Object.freeze() で凍結されたオブジェクトに存在するプロパティは不変。
*/
