'use strict';
let numberOfFilms = +prompt('Сколько фильмоов уже посмотрели?', '');


let personalMovieDB = {
    count  : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};



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

if (personalMovieDB.count < 10) {
    console.log('Мало фильмов, дружек');
} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
    console.log('Номально фильмов, дружек');
} else if (personalMovieDB.count > 30) {
    console.log('Киноман, дружек');
} else {
    console.log('error');
}
 
console.log(personalMovieDB);
console.log(personalMovieDB);

