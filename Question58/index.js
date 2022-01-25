// 「When」、「Where」、「Who」、「What」、「Why」、「How」の単語のみにマッチする正規表現を書きなさい

const regex = /Wh(en|ere|o|at)|How/
const result = regex.test("Where is morita");
console.log(result);
