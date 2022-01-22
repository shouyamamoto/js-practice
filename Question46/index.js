// 1234という数字を文字列に変更後、配列の要素としてインデックス順に格納してください

// const numString = [...String(1234)];
// console.log(numString);

const count = 1234;
const string = count.toString();
let arr = [];
for (let n of string) {
  arr.push(n);
}
console.log(arr);
