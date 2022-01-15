/* 0〜2番目の要素をそれぞれ
red, green, yellow
に置き換えて配列にしてください。また実行した際の返り値を教えてください
*/

const array = ['a1', 'a2', 'a3', 'a4', 'a5'];
const newArray = array.splice(0, 2, "red", "green", "yellow");
console.log(array, newArray);
