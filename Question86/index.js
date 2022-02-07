/**
 * こちらのobjをkey内でメソッド呼び出しされているのをコンピューティッドプロパティを使って書き換えてください
 *
 *function getKey(k) {
    return `a key named ${k}`;
  }
  const obj = {
    id: 5,
    name: 'San Francisco',
  };
  obj[getKey('enabled')] = true;
 */

function getKey(k) {
  return `a key named ${k}`;
}
const obj = {
  id: 5,
  name: 'San Francisco',
  [getKey("enabled")]: true
};