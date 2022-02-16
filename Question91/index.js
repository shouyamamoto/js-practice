/**
 * 下のようにuserというnameとidをプロパティで持ったオブジェクトを再割り当てやマルチプルなobjectを扱う際に簡潔な書き方にしてください
  function add (user){
    const name = user.name;
    const id = user.id;
    return `${name} ${id}`;
  }
 */

function add({ name, id }) {
  return `${name} ${id}`
}