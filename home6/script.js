'use strict';

let personalMovieDB = {
    count  : 0,
    movies : {},
    actors : {},
    genres : [],
    privat : true,
    start : function  () {
        personalMovieDB.count  = +prompt('Сколько фильмоов уже посмотрели?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count  = +prompt('Сколько фильмоов уже посмотрели?', '');
        }
    },
    writeYourGenres :  function () {
        for (let i = 0; i < 1; i++) {
            // let ans = prompt(`Ваш любимый жанр под номером ${i + 1}?`, '');
            // if( ans == null || ans == '') {
            //     console.log('вы ввели неккоректные или данные не ввели!');
            //     i--;
            // } else {
            //     personalMovieDB.genres[i -1] = ans;
            // }
            let ans = prompt('Введите ваши любимые жанры через запятую', '').toLowerCase();
            if(ans == null || ans == '') {
                console.log('вы ввели неккоректные или данные не ввели!');
                i--;
            } else {
                personalMovieDB.genres = ans.split(', ');
                personalMovieDB.genres.sort();
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр по порядку #${i + 1} - это ${item}`);
        });
    },
    rememberMyFilms : function  () {
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
    },
    detectPersonalLvl : function () {
        if (personalMovieDB.count < 10) {
            console.log('Мало фильмов, дружек');
        } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
            console.log('Номально фильмов, дружек');
        } else if (personalMovieDB.count > 30) {
            console.log('Киноман, дружек');
        } else {
            console.log('error');
        }
    },
    toggleVisibleMyDB : function () {
        if(personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    showMyDB : function() {
        if (!personalMovieDB.privat) {
            console.log(personalMovieDB);
        }
    }
};

personalMovieDB.start();
personalMovieDB.writeYourGenres();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB();


// rememberMyFilms();

// detectPersonalLvl();
