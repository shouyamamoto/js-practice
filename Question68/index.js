/**
 * IteratableからIteratorを取得、
 * 要素を出力していき、「要素がもうない意」の
 * {value: undefined, done: true}
 * を出力してください
 */

function it(arr) {
  const array = arr;
  let i = 0;
  return {
    next: function () {
      return {
        value: arr[i++],
        done: i <= array.length ? false : true
      }
    }
  }
}

const a = it(["a", "b", "c", "d"]);
console.log(a.next());
console.log(a.next());
console.log(a.next());
console.log(a.next());
console.log(a.next());

const iterator = ["a", "b", "c"][Symbol.iterator]()
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
