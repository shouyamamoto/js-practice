/*
x = 43
let y = 3
の2つの変数。deleteできるのはどちらですか？
*/

/* 
JavaScript の delete 演算子は、オブジェクトからプロパティを削除します。
同じプロパティへの参照がそれ以上保持されていない場合は、自動的に解放されます。
deleteは暗黙に定義された場合は変数は削除できるが、
var(let) や function文中の変数はnon-configurableであり削除できない
*/

x = 43;
let y = 3;
delete x; // 削除可能
delete y;

console.log(x, y);
