/**
 * const atom = {
 *  value: 1,
 *  addValue: function (value) {
 *   return atom.value + value;
 *  },
 * };
  上記object-shorthandを使って書き換えてください
 */

const atom = {
  value: 1,
  addValue(value) {
    return atom.value + value
  }
}
console.log(atom.addValue(2))