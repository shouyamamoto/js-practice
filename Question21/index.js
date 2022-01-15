// 浅いコピー(shallow copy)と深いコピー(deep copy)の違いを説明してください

/**
 * shallow copy
 * シャローコピー(浅いコピー)はプリミティブ値(文字列、数値、真偽値、null、undefined、Symbol)をコピーするが、
 * それ以外のオブジェクトは参照をコピーする。
 * 参照がコピーされるということは、コピー元とコピー先でオブジェクトが共有されるということである。
 * 1段階までコピーする
 *
 * deep copy
 * 一方、ディープコピー(深いコピー)はプリミティブ値だけでなく、
 * オブジェクトも値としてコピーする。したがって、コピー元とコピー先のオブジェクトは別物である。
 */

// shallow copy 
const object = {
  name: "apple",
  like: {
    food: "かぼちゃ"
  }
};
const newObject = { ...object };

newObject.name = "banana";
newObject.like.food = "魚";

console.log(object); // { name: "apple", like: { food: "魚" } }
console.log(newObject); // { name: "banana", like: { food: "魚" } }