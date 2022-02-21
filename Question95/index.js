/**
 *  var aa = ['oo', 'll'];をbbにコピーしてaaは['kk', 'jj'];が挿入されるようにしてください。
 *  期待する結果
    bb//['oo', 'll']; aa//['kk', 'jj'];
*/

const aa = ['oo', 'll'];
const bb = aa.splice(0, aa.length, 'kk', 'jj');

console.log(aa, bb);
