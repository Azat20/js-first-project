// alert ('hello');

// const result = confirm ('Are you here?');
// console.log (result);

// const answer = +prompt("Вам есть 18?", "18");
// console.log(typeof(answer + 5));

// const answers = [];

// answers[0] = prompt ('what is your name?', '');
// answers[1] = prompt ('what is your surname?', '');
// answers[2] = prompt ('how old are you?', '');

// console.log(typeof(answers));

// console.log(typeof(answers));

// const category = 'toys';
// console.log(`http://someurl.com/${category}/5`);


// const user = "Azat";
// alert (`Hello, ${user}`);

// console.log (4 + +"5");

// let incr = 10,
//     decr = 10;

// incr++;
// decr--;

// console.log(incr);
// console.log(decr);

// console.log(5%2);

// console.log(2*4 == 8);

// const isChecked = true,
//       isClose = false;

// console.log(isChecked || isClose);


/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

'use strict';
// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// const a = prompt('Один из последних просмотренных фильмов?', ''),
//       b = prompt('На сколько оцените его?', ''),
//       c = prompt('Один из последних просмотренных фильмов?', ''),
//       d = prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;


const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i= 0; i < 2; i++ ) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log( 'error');
        i--;
    }
    
}

if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильма");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30 ) {
    console.log("Вы классный зритель");
} else if (personalMovieDB.count >= 30 ) {
    console.log("Вы киноман");
} else {
    console.log("Произошло ошибка");
}

console.log(personalMovieDB);



// if ( 1) {
//     console.log('Ok!');
// }
// else{
//     console.log('Error');
// }

// const num = 50;

// if (num < 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log('Many');
// } else {
//     console.log('OK!');
// }

// (num === 50) ? console.log('OK!') : console.log('Error');


// const num = 50;

// switch (num) {
//     case 49:
//         console.log('false');
//         break;
//     case 100:
//         console.log('false');
//         break;
//     case 51:
//         console.log('true');
//         break;
//     default:
//         console.log('not this time');
//         break;
// }

// let num = 50;

// while ( num <= 55){
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);

// for (let i = 1; i < 10; i++ ) {
//     if (i === 6){
//         // break;
//         continue;
//     }

//     console.log(i);
// }