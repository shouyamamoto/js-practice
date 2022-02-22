"use strict";

/**
 * このような配列 var aa = ['ii', 'jj', 'kk'];がある。
 * 'jj'要素を削除するために deleteを使った場合とspliceを使った場合の違いは何か。
 * それがわかるコードを書いてください
 */

const aa = ['ii', 'jj', 'kk'];
delete aa[1]; // 配列の長さは影響を受けない。

const bb = ['ii', 'jj', 'kk'];
const cc = bb.splice(1, 1)

console.log(aa.length === bb.length)