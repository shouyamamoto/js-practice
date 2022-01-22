/**
 * 下記のような
  array = [
    {name: 'kenji', mail:'fafa@eee.com'},
    {name: 'morita', mail: 'kkk@faf.com'}
  ]
  配列内にある連想配列のkeyとmail値を配列に格納して出力してください
  names -> [ "kenji", "morita" ]
  mails -> [ "fafa@eee.com", "kkk@faf.com"]
 */

const array = [
  { name: 'kenji', mail: 'fafa@eee.com' },
  { name: 'morita', mail: 'kkk@faf.com' }
];

const names = [];
const mails = [];

for (let obj of array) {
  names.push(obj.name);
  mails.push(obj.mail);
}

console.log(names, mails);
