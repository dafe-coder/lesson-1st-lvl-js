'use strict';

let numberOfFilms = +prompt('Сколько фильмоов уже посмотрели?', '');


let personalMovieDB = {
    count  : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};

let watchFilms    = prompt('Один из просмотренных фильмов...', '');
let watchFilms2   = prompt('На сколько оцените его?', '');
let watchFilms3   = prompt('Один из просмотренных фильмов...', '');
let watchFilms4   = prompt('На сколько оцените его?', '');

personalMovieDB.movies[numberOfFilms] = watchFilms2;
personalMovieDB.movies[watchFilms3] = watchFilms4;
 
console.log(personalMovieDB);
console.log(personalMovieDB);

