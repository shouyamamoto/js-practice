// 全てのaaにある多次元配列の全ての要素に文字列'san'を付け加えて一つの配列として出力してください
// var aa = [['morita', 'kenji', 'keiko'],['morita', 'kenji', 'keiko']]

const aa = [['morita', 'kenji', 'keiko'], ['morita', 'kenji', 'keiko']];

// sanを付け加える関数を実装
const arry = aa.map(a => a.map(ele => `${ele}san`));

// 2つの配列を1つの配列に変換　受け取った配列を1つの配列に順に格納していく関数
const arryGroup = target => {
}

console.log(arryGroup(arry));