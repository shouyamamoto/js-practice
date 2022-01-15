// 配列['おはよう','こんにちは','おやすみなさい']の要素がランダムに出力される関数を書いてください。
// (配列に要素が追加される事を仮定してたものにしてください)

const array = ['おはよう', 'こんにちは', 'おやすみなさい', "ははは"];
const greeting = array[Math.floor(Math.random() * array.length)]
console.log(greeting)

// Math.random() 0 (含む) から 1 (含まない) までの擬似乱数である浮動小数点数です。