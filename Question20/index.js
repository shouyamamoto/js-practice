/*
  コンストラクタWhoの初期化時に'morita'(String)を渡し
  インスタンスプロパティnameに代入、
  インスタンスメソッドgetNameの返り値が Who.prototype.name値になる
  いわゆる「classのようなもの」を作成してください
  ※ インスタンスメソッドはprototypeに代入してください
*/

function Who(name) {
  this.name = name
}

Who.prototype.getName = function () {
  console.log(this.name);
}

const person = new Who("morita");
person.getName()
