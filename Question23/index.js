// ['a','B','c', 'e','k'] に並び替え
let array = ['e', 'a', 'k', 'B', 'c'];
array.sort((a, b) => a.toUpperCase() < b.toUpperCase() ? -1 : 1);
console.log(array)
