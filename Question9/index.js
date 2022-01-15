/**
 * ['a', 'b', 'c'] 配列の中の全ての要素を結合し、1つの文字列として出力してください。
 */

const array = ["a", "b", "c"];
const newArray = array.reduce((acc, curr) => {
  return acc + curr;
});
console.log(newArray);
console.log(array.join(""));
console.log(array);
