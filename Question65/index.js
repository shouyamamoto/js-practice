/**
 * 文字列'fafafakenjifafafa'に'
 * kenji'が含まれているかどうかの真偽値を出力してください
 * expect //true
 */

const str = "fafafakenjifafafa";
const regex = /kenji/
console.log(regex.test(str));
console.log(str.includes("kenji"));
