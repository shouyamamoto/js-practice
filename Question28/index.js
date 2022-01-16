/*
  関数sayHiに自分の名前を引数で渡した際に hello!yourname
  何も渡さない場合 hello!
  と返す関数を作成し、それをapplyで実行してください。
  また applyの第一引数にnullを渡す場合とオブジェクトを渡す場合のそれぞれのthisは何を指しますか答えてください
*/

const sayHi = (yourname) => {
  console.log(this)
  if (yourname) {
    return `hello! ${yourname}`
  } else {
    return `hello!`
  }
}

console.log(sayHi.apply({}, ["morita"]));

/**
 * 関数は、呼び出されるものではなく、適応されるものと考える。
 * 通常行なっている関数の呼び出しは、Function.prototype.apply()のシンタックスシュガーである。
 *
 * 1つめの引数には、関数の内部でthisに束縛されるオブジェクト
 * 2つめの引数には、引数の配列で関数の内部に使用したい値の配列
 * を与える
 */

