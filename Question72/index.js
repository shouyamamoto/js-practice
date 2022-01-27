/**
 * 配列arr = [1, 2, 3]にArray#concatを使わずに
 * arr2 = [4, 5, 6]を結合させ[1, 2, 3, 4, 5, 6]となるようにしてください
 */

const arr = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr, ...arr2];
console.log(arr3);