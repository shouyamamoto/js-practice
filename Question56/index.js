/**
 * 「」の中に「ヤッホー!」の文字列が1回以上続く場合にのみマッチする正規表現を書いてください。
 * (！が英単語を構成する文字以外の場合はどうか、また「ヤッホー！」が2回以上3回以下にマッチにはどう書きますか)
 */

const yahoo1 = "「ヤッホー!」"
const yahoo2 = "「ヤッホー!ヤッホー!」"
const yahoo3 = "「ヤッホー!ヤッホー!ヤッホー!」"
const yahoo4 = "「ヤッホー!ヤッホー!ヤッホー!ヤッホー!」"

// 1回以上続く  +?
// 2回以上 3回以下 {min,max}
// 指定文字列 /指定したい文字列/ 
const regex1 = /「(ヤッホー!)+?」/
const regex2 = /「(ヤッホー!){2,3}」/
console.log(regex1.test(yahoo1));
console.log(regex1.test(yahoo2));
console.log(regex1.test(yahoo3));
console.log(regex1.test(yahoo4));

console.log(regex2.test(yahoo1));
console.log(regex2.test(yahoo2));
console.log(regex2.test(yahoo3));
console.log(regex2.test(yahoo4));
