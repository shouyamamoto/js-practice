/**
 * 関数iiを実行すると返り値で関数を受け取り、
 * その関数に引数'home'を渡し実行すると'my home'と返ってくるクロージャーを作ってください
 */

const ii = () => {
  const my = "my"
  return (text2) => {
    return `${my} ${text2}`;
  }
}
const myHome = ii();
console.log(myHome("home"));
