/**
 * [{name: 'kenji'},{name: 'morita'}]の要素のvalueを次のように書き出してください
 * (文字列'san'を付けています)
 * e.g ['kenjisan', 'moritasan']
 * 
 * これをforEachでやる
 */
const names = [{ name: "kenji" }, { name: "morita" }];
let arry = [];
names.forEach(name => arry.push(`${name.name}san`));
console.log(arry)
