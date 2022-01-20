/**
 * このパラメーターに何もわたってこなかった場合Errorをスローするようにしてください 
 * 期待する結果 
 * getSum(10) 
 * * //throws b is not defined 
 * 
 * getSum(undefined, 10) 
 * //throws a is not defined
 */

const throwErrorMessage = message => {
  throw new Error(message);
}

const getSum = (a, b) => {
  if (a === undefined) {
    throwErrorMessage("a is not defined");
  } else if (b === undefined) {
    throwErrorMessage("b is not defined");
  }
  return a + b;
};

try {
  getSum(10);
} catch (e) {
  console.log(e, e.message, e.name) // throwは、例外を意図した部分でコントロールできる。現在の関数の実行は停止し、コールスタック内の一番はじめのcatchブロックに制御をうつす。呼び出し元の関数にcatchブロックが存在しない場合、プログラムが終了する。
}

try {
  getSum(undefined, 10);
} catch (e) {
  console.log(e)
}
