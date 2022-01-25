/**
 * 文字列 moritaの
 * 1文字目mを変数index0に代入、
 * 2文字目oをindex1に代入、
 * 残りを配列restの各要素として出力してください
 */

const str = "morita";
const [index0, index1, ...rest] = str;
console.log(index0, index1, rest);

