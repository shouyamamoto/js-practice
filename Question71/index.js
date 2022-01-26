/**
 * foo(1, 2, 3, 4, 5, 6)を実行したら
 * 1がfirst、2がsecond、残りが配列の要素
 * になるような fooを定義してください
 */

function foo(...args) {
  const [first, second, ...arr] = args;
  return {
    first, second, arr
  }
}

console.log(foo(1, 2, 3, 4, 5, 6));