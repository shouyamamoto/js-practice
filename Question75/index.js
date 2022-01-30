/**
 * var key = 'foo';
  var obj = {};
  obj[key] = 0;
  obj[key + '_bar'] = 1;
  書いていた記述をECMAScript2015の記述で書いてください
 */

const key = "foo";
const obj = {
  [key]: 0,
  [key + "_bar"]: 1
}

console.log(obj);
