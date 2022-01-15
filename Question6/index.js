/*
if (typeof x === 'undefined') {
  ???
}
if(x === undefined){
  ???
}
変数xが定義されていない場合上の1、2は実行されますか?
*/

// 1 Yes 
// 2 No ReferenceError: x is not defined

console.log(typeof x === "undefined");
console.log(x === undefined);

/*
  https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/typeof
*/
