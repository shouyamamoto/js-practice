// ある配列itemsの要素をコピーしている記述をspreadArrayを使って簡潔に記述してください
const items = [1, 2, 3, 4]
const len = items.length;
const itemsCopy = [];
let i;

for (i = 0; i < len; i++) {
  itemsCopy[i] = items[i];
}

const itemsCopy2 = [...items];
console.log(itemsCopy, itemsCopy2)
