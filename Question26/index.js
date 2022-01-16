// カーリー化されたadd(1)(2)もしくはadd(1,2) を実行した際両方とも返り値3になる関数を定義しなさい。
function add(num, num2) {
  if (typeof num2 === "undefined") {
    return num2 => num + num2;
  }
  return num + num2
}

console.log(add(1)(2))
console.log(add(1, 2))

// 参考
// https://kenju.gitbooks.io/js_step-up-to-intermediate/content/content/part03/currying.html