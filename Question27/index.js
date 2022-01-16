
/*
  var fafa = Factory('morita');
  fafa.introduce()
  //'morita'
  上記のような実行をしたら渡したname(ここではmorita)が表示される
  メソッドintroduceを持つファクトリー関数を定義しなさい。

  - ファクトリ関数とは
  関数が1つのオブジェクトを返すとき、その関数をファクトリ関数と呼びます。
*/

const Factory = (name) => {
  return {
    introduce: () => console.log(name)
  }
}

// 別解
// const Factory = (name) => {
//   const getName = () => console.log(name);
//   return {
//     introduce: () => getName()
//   }
// }

const fafa = Factory("morita");
fafa.introduce()
