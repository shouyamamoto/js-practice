// next()を実行しただけ返り値が1増える関数を定義してください
const incrementFnFactory = () => {
  let count = 0;
  return () => {
    return count + 1;
  }
}

const increment = incrementFnFactory()
console.log(increment())
console.log(increment())
console.log(increment())
console.log(increment())
console.log(increment())

/**
 * count++ vs count += 1 vs count + 1
 *
 * count++ または ++count をインクリメント演算子 という
 * ++を後ろにつけると、インクリメントはするが、インクリメント前の値を返す
 * ++を前につけると、インクリメントした値を返す
 *
 * count += 1 を加算代入という。
 * count += 1 は count = count + 1 と同じ
 *
 * count + 1 を行うと、 1を足したものを常に返す
 */
