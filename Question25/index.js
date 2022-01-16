// 文字列 '10'をNumber型にし、型判定し、数値かどうか評価後、文字列に変換してください

const number10 = parseInt("10", 10);
let result;
if (typeof number10 === "number") {
  result = number10.toString()
}
console.log(result);

// numberから文字列に変換する方法

/**
 * 1. String()
 * https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/String
 *
 * Stringコンストラクターは、新しいstringオブジェクトを生成するために使う。
 * 関数として呼び出された場合には、プリミティブ文字列への変換のみ行う。
 *
 * typeof new String("10") // object
 * String(10) // string
 *
 * 2. .toString()
 * 指定された Number オブジェクトを表す文字列を返す。
 * 引数には任意で数値を表すために使われる基数を指定する、 2 から 36 までの整数を指定できる。
 *
 */