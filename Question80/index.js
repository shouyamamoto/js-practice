/**
 * ユーザー定義関数funを作り、
 * 実行時の引数として、オブジェクトkeyにa,b。
 * 値をそれぞれ1,4として加算して返してください
 *  */

function fun({ a, b }) {
  return a + b
}

const key = {
  a: 1,
  b: 4
}
console.log(fun(key));