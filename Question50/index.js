/**
* 二次元配列
  [['one', 'info@fa'],['two', 'send@fafa'],['three', 'hoso@fafa']];
  の'two'の値を取得してください
*/

const mails = [['one', 'info@fa'], ['two', 'send@fafa'], ['three', 'hoso@fafa']];
console.log(mails[1][0], mails[1][1]);

// 二次元配列を使用すれば、keyとvalueの組み合わせを作っておける。それをnew Mapとすることで、 .get()を使ってvalueを取得することができる
const m = new Map(mails);
console.log(m);
console.log(m.get("two"));
