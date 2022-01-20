/**
 * let arr = ['2','23','0','16'];
  を小さい順にソートしてください。その後ソートをできないようにread-onlyにしてください
 */

const arr = ['2', '23', '0', '16'];
arr.sort((a, b) => {
  return Number(a) - Number(b);
})
console.log(arr)
// arr  [ '0', '2', '16', '23' ]
Object.freeze(arr);
arr.sort((a, b) => { // Cannot assign to read only property '0' of object 
  return Number(b) - Number(a);
})

// 配列もObject.freezeや、Object.sealを使えることがわかった！