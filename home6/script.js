'use strict';
let numberOfFilms;

function start () {
    numberOfFilms  = +prompt('Сколько фильмоов уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms  = +prompt('Сколько фильмоов уже посмотрели?', '');
    }
}
start();

let personalMovieDB = {
    count  : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};

function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 0; i <= 2; i++) {
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}?`, '');
    }
}
writeYourGenres();

function rememberMyFilms () {
    for (let i = 1; i <= 2; i++) {
        let watchFilms    = prompt('Один из просмотренных фильмов...', '');
        let watchFilms2   = prompt('На сколько оцените его?', '');
        if (watchFilms != null && watchFilms2 != null && watchFilms != '' && watchFilms2 != '' && watchFilms.length < 50) {
            personalMovieDB.movies[watchFilms] = watchFilms2;
            console.log('yes');
        } else {
            console.log('error');
            i--;
        }
    } 
}

// rememberMyFilms();


function detectPersonalLvl() {
    if (personalMovieDB.count < 10) {
        console.log('Мало фильмов, дружек');
    } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
        console.log('Номально фильмов, дружек');
    } else if (personalMovieDB.count > 30) {
        console.log('Киноман, дружек');
    } else {
        console.log('error');
    }
}
// detectPersonalLvl();
