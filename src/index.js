/**
 * const let の変数宣言
 */
// var val1 = "var変数";
// console.log(val1);

// //var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// //var変数は再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// //letは上書きが可能
// val2 = "let変数を上書き";
// console.log(val2);

// //letは再宣言不可能
// let val2 = "let変数を再宣言";

// const val3 = "const変数";
// console.log(val3);

// const変数は上書き不可能
// val3 = "const変数を上書き";

// const val3 = "const変数を再宣言";

//constで定義したオブジェクトはプロパティは変更が可能
// const val4 = {
//   name: "じゃけえ",
//   age: 28,
// };
// // val4のプロパティにアクセスするため”.”を使う
// val4.name = "jak";
// val4.addres = "hiroshima";
// console.log(val4);

//constで定義した配列はプロパティは変更が可能
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 */
// const name = "じゃけえ";
// const age = 28;
// // 私の名前はじゃけえです。年齢は２８歳です。

// //従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);

// //　template文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

/**
 * アロー関数
 */

//従来の関数
//  function func1(str){
//    return str;
//  }

//関数を変数に入れてから使う書き方
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

// //アロー関数
// const func2 = (str) => {
//   return str;
// };
// console.log(func2("fnc2です"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func3(10, 20));

/**
 * 分割代入
 */

//  const myProfile = {
//    name: "じゃけぇ",
//    age: 28,
//  };

//  const message1 = `私の名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
//  console.log(message1);

//  const { name, age } = myProfile;
//  const message2 = `私の名前は${name}です。年齢は${age}です。`;
//  console.log(message2);

// //配列の場合、順番が大事。配列から要素を順番に抜くから！
// const myProfile = ["じゃけぇ", 28];
// const message3 = `私の名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(message4);

/**
 * デフォルト値、引数など
 */

// const sayHello = (name = "ゲスト") => console.log(`こんにちは、${name}さん！`);
// sayHello("じゃけぇ");

/**
 * スプレッド構文...
 */
//配列の展開
// const arr1 = [1, 2];
// // console.log(arr1);
// // console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0],arr1[1]);
// sumFunc(...arr1);

// // まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

//配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

//　＝でコピーするのはなぜだめなのか？
// const arr8 = arr4;
// arr8[0] = 100;
// console.log(arr4);  //arr8だけでなく4まで変わってしまうからダメ

/**
 * map、fillterを使った配列の処理
 */

//  const nameArr = ["田中", "山田", "じゃけぇ"];
//  for (let i = 0; i < nameArr.length; i++){
//    console.log(nameArr[i]);
//  }

//mapには二つの方法がある。
//  //【方法１】returnされた結果に基づいて新しい配列を生成する
// const nameArr2 = nameArr.map((name) => {
//   return name;
// })
// console.log(nameArr2);

// //【方法２】単純に配列をループさせて何かを処理する
// nameArr.map((name) => console.log(name))

// //filterの使い方
// //ある条件に一致したものだけを取り出して配列を生成する関数。
// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((numArr) => {
//   return numArr % 2 === 1
// })
// console.log(newNumArr);

//  //下のような場合、mapを使って同じことをするとどうなるか？
// const nameArr = ["田中", "山田", "じゃけぇ"];
//  for (let i = 0; i < nameArr.length; i++){
//    console.log(`${i + 1}番目は${nameArr[i]}です。`)
//  }

// //新しく引数を設定する。必要に応じて引数は増やす
// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です。`))

// //mapを使った応用問題
// //問.じゃけぇ以外には「さん」付けをしよう
// const newNameArr = nameArr.map((name) => {
//   if(name === "じゃけぇ"){
//     return name
//   } else{
//     return `${name}さん`
//   }
// })
// console.log(newNameArr);

/**
 * 三項演算子
 */
// //ある条件？　条件がtrueの時：　条件がfalseの時；
// const val1 = 1 > 0 ? "trueです" : "falseです";
// console.log(val1);

// const num = 1300;

// //上の数字が「数値」として入力されているならフォーマット化する文を書こう
// //　typeofとは、その変数の型がなんなのかを判定してくれる　　toLocaleString()とは、金額表示のようなカンマ区切りで三桁表示にしてくれる関数
// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
// console.log(formattedNum);

// //関数のreturn部分に三項演算子を使う例
// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? '100を超えています!!' : '許容範囲内です。' ;
// }
// console.log(checkSum(50, 60));

/**
 *論理演算子の本当の意味を知ろう　$$（≒かつ） ||（≒もしくは）
 */

//  const flag1 = true;
//  const flag2 = false;
//  if (flag1 || flag2){
//    console.log("1か2はtrueになります");
//  }
//  if (flag1 && flag2){
//   console.log("1も2もtrueになります");
// }

// ||の本当の意味は「左側がfalseなら右側を返す」
// nullはJS上False判定される
// const num = 100;
// const fee = num || "金額が未設定です";
// console.log(fee);

// &&の本当の意味は「左側がfalseなら右側を返す」
const num2 = 100;
const fee2 = num2 && "何か設定されました";
console.log(fee2);
