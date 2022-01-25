// 文字列fooをイテレーターを使い['f','o','o']となるようにしてください。
(function createChars() {
  const arr = [];
  for (let char of "foo") {
    arr.push(char);
  }
  console.log(arr)
})();