// ['a', 'b']の各要素にindex値を足した文字列を出力してくださいe.g 'a0'と'b1'
const arry = ["a", "b"];
const addIndexValue = target => target.forEach((ele, index) => console.log(ele + index))
addIndexValue(arry);
