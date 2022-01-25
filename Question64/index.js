/**
 * function getSomething(){
    return {
      first: 1,
      second: 2,
      third: 3
    }
  }
  の関数で返しているオブジェクトのfirst,second,thirdのvalue値をそれぞれ
  first,second,thirdに代入してください
 */

function getSomething() {
  return {
    first: 1,
    second: 2,
    third: 3
  }
}

const { first, second, third } = getSomething()
console.log(first, second, third);