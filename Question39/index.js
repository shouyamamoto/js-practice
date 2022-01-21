//for in文に関する注意点を3つ挙げてください

// プロパティを列挙する順序がオブジェクトリテラルと配列リテラルで違う


// 列挙できないプロパティがある(Array.lengthなど)
// プロトタイプ継承したプロパティも列挙する


function fn() {
  console.log(this);
}
fn() // this は window を指す

const fn2 = {
  x: "値",
}
fn2.outputLog = fn;
fn2.outputLog(); // thisはfn2を指す
