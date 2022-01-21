// DOM上にあるdivをnodeListに変換して配列に格納してください
const divs = window.document.getElementsByTagName("div")
const divArry = [...divs];
console.log(divArry);
