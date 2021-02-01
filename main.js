// let number = 5;
// const leftBorderWidth =1;

// number = 10;
// console.log(number);

// const obj = {
//     a: 50
// };

// obj.a = 10;

// console.log(obj);

// Lesson 5
// let number = 4.6;

// console.log(-4/0);
// console.log('string' * 9);

// const persone = 'Alex';

// const bool = true;

// let und;
// console.log(und);

// const obj = {
//     name: "John",
//     age: 25,
//     isMarried: false
// };

// console.log(obj.name);
// // console.log(obj['name']);

// let arr = ['plum.png', 'orange.jpg', 6, 'apple.bmp', {}, []];
// console.log(arr[1]);

// Lesson 7
// alert('Hello');

// const result = confirm('Are you here');
// console.log(result);

// const answer = +prompt('Вам есть 18?', '18');
// console.log(answer + 5);

// const answers = [];

// answers[0] = prompt('Как ваше имя?', '')
// answers[1] = prompt('Как ваша Фамилия?', '')
// answers[2] = prompt('Сколько вам лет?', '')

// console.log(typeof(answers));
// console.log(typeof(null));

// Lesson 8
// const category = 'toys';

// console.log(`https://someurl.com/${category}/5`);

// const user = "Ivan";

// alert(`Привет, ${user}`);

// Lesson 9
// console.log('arr' + " - object");
// console.log(4 + +"5");

// let incr = 10,
//     decr = 10;

// ++incr;
// --decr;

// console.log(++incr);
// console.log(--decr);

// console.log(5%2);
// console.log(2*4 === '8');

// console.log(2 + 2 * 2 === 8);

// const isChecked = true,
//         isClose = false;

//         console.log(isChecked && isClose);
//         console.log(isChecked || isClose);

// Lesson 12
// const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// const a = prompt('Один из последних просмотренных фильмов?', ''),
//     b = prompt('На сколько оцените его?', ''),
//     c = prompt('Один из последних просмотренных фильмов?', ''),
//     d = prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);

// Lesson 13

if (4 == 9) {
  console.log("ok!");
} else {
  console.log("Error");
}

const num = 50;

if (num < 49) {
  console.log("Error");
} else if (num > 100) {
  console.log("Много");
} else {
  console.log("Ok!");
}

num === 50 ? console.log("Ok!") : console.log("Error");

switch (num) {
  case 49:
    console.log("Неверно");
    break;
  case 100:
    console.log("Неверно");
    break;
  case 50:
    console.log("В точку");
    break;
  default:
    console.log("Не в этот раз");
    break;
}

var myInt = 5;
var myFloat =6.687;

myInt;
myFloat;
typeof myInt;
typeof myFloat;