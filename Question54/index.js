/**
 * 'It is an important problem'
 * 'The import duty is not cheap'
 *
 * の文字列内importにマッチすると booleanを返す記述をしてください
 */

const elements = ['It is an important problem', 'The import duty is not cheap'];

// import という文字列があるかを確認する関数
const hasImport = ele => {
  // \b は単語の境界線を示す important は t と　a　の間に境界がないためマッチしない
  const regex = /\bimport\b/;
  return regex.test(ele);
}

elements.forEach((ele, index, array) => {
  const result = hasImport(ele);
  console.log(`${array[index]} is result: ${result}`)
});
