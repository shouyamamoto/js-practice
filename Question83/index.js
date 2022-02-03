/**
 * [{name: 'kenji'},{name: 'morita'}]の要素のvalueを次のように書き出してください
 * (文字列'san'を付けています)
 * e.g ['kenjisan', 'moritasan']
 */
const names = [{ name: "kenji" }, { name: "morita" }];
// const nameValues = [...names].map(ele => ele.name);

// function nameValueAddSan(target) {
//   return target.reduce((preName, currName) => {
//     preName.push(`${currName}san`);
//     return preName
//   }, []);
// }

// console.log(nameValueAddSan(nameValues));

const result = names.map(name => `${name.name}san`);
console.log(result)