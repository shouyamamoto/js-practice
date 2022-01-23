/**
 * 'morita kenji'のような
 * 1つ以上の小英字、半角スペース、1つ以上の小英字にマッチした場合、
 * 配列['morita kenji']
 * が返るようにしてください。
 */

const ele = "morita kenji";
const array = [];

// 配列に要素を格納する関数
const addElementToArray = (array, ele) => array.push(ele);

// 正規表現で要素がマッチするか確認する関数
const isRegular = (ele) => {
  const regex = /[a-z]+\s[a-z]+/;
  return regex.exec(ele);
}

if (isRegular(ele)) {
  addElementToArray(array, ele);
  console.log(array);
} else {
  console.log("マッチしませんでした")
}
