/**
 * 配列
 * var passed = [12, 5, 8, 130, 44]
 * の要素全てが10以上かどうかを評価してtrueかfalseを返してください。
 * また10以上のものが一つでもあった場合trueを返してください。
 */

const validTenOver = (num) => {
  return num >= 10;
}
const passed = [12, 5, 8, 130, 44];
const result = passed.every(num => validTenOver(num));
console.log(result);
const result2 = passed.map(num => validTenOver(num) ? true : false).includes(true);
console.log(result2);
