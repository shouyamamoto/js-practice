/*
  concat以外で新たな配列としてarr2にコピーしてください。その後arr2[0]= 123を代入するとarrは何を出力するか答えなさい
*/
const arr = [3, 4, 5];
const arr2 = [...arr];
const arr3 = arr.map(a => a);
const arr4 = arr.filter(a => a);
const arr5 = arr.slice()
console.log(arr2, arr3, arr4, arr5);
console.log(arr2[0] = 123);
console.log(arr);
