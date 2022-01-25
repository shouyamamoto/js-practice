/**
 * x = new Boolean(false)
 * if文の式として渡すと実行されるか答えなさい
*/

/**
 * 値が省略された場合や、値が 0, -0, null, false, NaN, undefined あるいは空文字列 ("") 
 * であった場合、オブジェクトは false の初期値を持ちます。
 * 
 * それ以外のあらゆる値は、オブジェクトや "false" という文字列も含めて、 
 * true の初期値を持つオブジェクトを生成します。
 */

const x = new Boolean(false)

if (x) {
  console.log(x);
}
