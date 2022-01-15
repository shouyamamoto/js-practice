// dd,ee,ffを新たな配列として返してください
const arry = ['aa', 'bb', 'cc', 'dd', 'ee', 'ff', 'gg'];
const newArry = arry.slice(3, 6)
console.log(newArry);

//slice()
// start と end が配列の中の項目のインデックスを表している場合、
// start から end まで (end は含まれない) で選択された配列の一部の浅いコピーを新しい配列オブジェクトに作成して返します。
// 元の配列は変更されません。
