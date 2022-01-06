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


let numberOfFilms;

function start () {
    numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};



function rememberMyFilms () {
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
}

// rememberMyFilms();




function detecPersonalLevel () {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильма");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30 ) {
        console.log("Вы классный зритель");
    } else if (personalMovieDB.count >= 30 ) {
        console.log("Вы киноман");
    } else {
        console.log("Произошло ошибка");
    }
}

detecPersonalLevel();

function ShowMyDB (hidden){
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

ShowMyDB(personalMovieDB.privat);


function writeYourGenres () {
    for (let i = 1; i <=3 ; i++){
        personalMovieDB.genres[i - 1] = prompt( `Ваш любимый жанр под номером ${i}`);
    }

}
writeYourGenres();



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


// Function

// let num = 20;

// function showFirstMessage (text) {
//     console.log(text);
//     let num = 10;
// }

// showFirstMessage("Hello world!");
// console.log(num);
// function calc (a,b) {
//     return( a+b);
// }

// console.log (calc(4,5));
// console.log (calc(2,6));

// function ret (){
//     let num = 50;
//     return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);

// const logger = function () {
//     console.log("Hello");
// };

// logger ();

// const str = "test";
// const arr = [1, 2, 4];

// console.log(str.toUpperCase());
// console.log(str);

// let fruit = "Some fruit";

// console.log(fruit.indexOf("fruit"));

// const logg = "Yello world";
// console.log( logg.slice(6, 11));

// console.log( logg.substring(6, 11));
// console.log( logg.substr(6, 5));

// const num  = 12.2;
// console.log( Math.round(num)); 

// const test = "12.2px" ;
// console.log (parseInt(test));
// console.log(parseFloat(test));

function first () {
    // do something
    setTimeout(function(){
        console.log(1);
    }, 500);
}

function second () {
    console.log (2) ;
}

first();
second();

function learnJS (lang, callback){
    console.log (`Я учу: ${lang}`);
    callback();
}

function done() {
    console.log("Я прошел этот урок!");
}

learnJS ('Javascript', done);



const options = {
    name: 'test',
    with: 1024,
    height: 1024,
    colors: {
        border:'black', 
        bg: 'red'
    },
    makeTest: function () {
        console.log("Test");
    } 
};

options.makeTest();

const{border,bg} = options.colors;
console.log(border);

// console.log(Objects.keys(options).length);

// console.log(options["colors"]["border"]);

// delete options.name;
// console.log(options);

let counter = 0;

for (let key in options){
    if (typeof(options[key]) === "object") {
        for (let i in options[key]){
            console.log(`Свойства ${i} имеет значение ${ options[key][i]}`);
            counter++;
        }
    } else {
        console.log(`Свойства ${key} имеет значение ${ options[key]}`);
        counter++;
    }
}

console.log(counter);



const arr = [1, 42, 23, 16, 8];
arr.sort(compaerNum);
console.log(arr);

function compaerNum (a,b){
    return a - b;
}

// arr [99] = 0;
// console.log(arr.length);
// console.log(arr);

arr.forEach(function(item, i, arr) {
    console.log(`${i}: ${item} внутри массива ${arr}`);
});

// arr.pop();
// arr.push(10);

// console.log(arr);

// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

for (let value of arr) {
    console.log(value);
}

const str = prompt("", "");
const products = str.split ("","");
products.sort();
console.log(products.joins(';'));



// let a = 5,
//     b = a;

// b = b + 5;

// console.log(b);
// console.log(a);

// const obj = {
//     a: 5,
//     b: 1
// };
// const copy = obj;

// copy.a = 10;

// console.log(copy);
// console.log(obj);

function copy(mainObj) {
    let objCopy = {};

    let key;
    for(key in mainObj){
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7, 
        y: 4
    }
};

const newNumbers = copy(numbers);

newNumbers.a =10 ;
newNumbers.c.x = 10;

console.log(newNumbers);
console.log(numbers);