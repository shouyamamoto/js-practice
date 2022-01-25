// myFalse = new Boolean(false);
// g = new Boolean(myFalse);
// 上記のコードはtrueかfalseか

// Boolean オブジェクトの初期値としてオブジェクトを指定した場合、
// それが値が false の Boolean オブジェクトであっても、新しい Boolean オブジェクトは true の値を持ちます。

const myFalse = new Boolean(false);
const g = new Boolean(myFalse);
console.log(myFalse, g)

