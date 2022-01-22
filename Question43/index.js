/*
  配列['a', 'b', 'c', 'd', 'e'] のインデックス2番目に'morita'という要素を加えなさい。
  期待する結果['a', 'b','morita', 'c', 'd', 'e']
*/

// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

const arr = ['a', 'b', 'c', 'd', 'e'];
arr.splice(2, 0, "morita");
console.log(arr);
