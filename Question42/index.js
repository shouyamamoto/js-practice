// イテレーターを使い順番に出力してください
const arr = ['f', 'o', 'x', 'k'];
const eArr = arr[Symbol.iterator]();

// next には done と value が格納されている
console.log(eArr.next().value);
console.log(eArr.next().value);
console.log(eArr.next().value);
console.log(eArr.next().value);

for (v of arr) console.log(v);