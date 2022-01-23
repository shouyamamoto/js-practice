// ひらがな全てにマッチ、半角カタカナ全てにマッチ、カタカナ全てにマッチする正規表現を記述してください
const Regular = {
  hiragara: {
    regex: /^[\u3040-\u309F]+$/
  },
  hankakuKatakana: {
    regex: /^[\uFF61-\uFF9F]+$/
  },
  katakana: {
    regex: /^[\u30A0-\u30FF]+$/
  }
}

const hiragana = "こんにちば";
const hiragana2 = "良い天気ですね";
const hankakuKatakana = "ｺﾝﾆﾁﾊ";
const hankakuKatakana2 = "ｺﾝﾆﾁハ";
const katakana = "コンニチハ";
const katakana2 = "コンニチﾊ";

console.log(Regular.hiragara.regex.test(hiragana))
console.log(Regular.hiragara.regex.test(hiragana2))
console.log(Regular.hankakuKatakana.regex.test(hankakuKatakana))
console.log(Regular.hankakuKatakana.regex.test(hankakuKatakana2))
console.log(Regular.katakana.regex.test(katakana))
console.log(Regular.katakana.regex.test(katakana2))