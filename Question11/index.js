// id番号が若い順にソートしたオブジェクトを含む配列を出力してください

let arry = [
  { id: 1, name: 'morita' },
  { id: 2, name: 'kenji' },
  { id: 4, name: 'uro' },
  { id: 3, name: 'ken' }
];

const sortDescId = target => [...target].sort((ele1, ele2) => ele1.id - ele2.id);
const sortAscId = target => [...target].sort((ele1, ele2) => ele2.id - ele1.id);
console.log(sortDescId(arry));
console.log(sortAscId(arry));

/**
 * https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
 */