/*
let x;
if (x === void 0) {
}

if (y === void 0) {
}
1,2はそれぞれ実行されますか
*/

// 1 Yes
// 2 No :  ReferenceError y is not defined

let x;
console.log(x === void 0);
console.log(y === void 0);

// void(0)は、常にUndefinedを返してくれる

/*
  https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError
*/