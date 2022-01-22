// こちらは要素が2だったらループを抜けたいのだが期待どうり動かない
// 期待する出力 //0, 1
/**
 *  [0, 1, 2, 3, 4].forEach(function (val, i) {
      if (val === 2) {
        // how do we stop?
        return true;
      }
      console.log(val); // 0, 1, 3, 4
    });
 *
 */

[0, 1, 2, 3, 4].some(val => {
  if (val === 2) {
    return true;
  }
  console.log(val)
});
