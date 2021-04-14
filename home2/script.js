'use strict';

const select = document.querySelector('select');
const out = document.querySelector('.out');

select.addEventListener('change', setWeather);

function setWeather() {
    let option = select.value;
    switch (option) {
        case 'sunny' :
            out.innerHTML = 'Сегодня хорошо и солнечно. Наденьте шорты! Идите на пляж или в парк, и купите мороженое.';
            break;
        case 'rainy' :
            out.innerHTML = 'На улице дождь. Возьмите плащ и зонт, и не гуляйте слишком долго';
            break;
        case 'snowing' : 
            out.innerHTML = 'Идёт снег - морозно! Лучше всего посидеть с чашкой горячего шоколада или слепить снеговика.';
            break;
        case 'overcast' :
            out.innerHTML = 'Дождя нет, но небо серое и мрачное; он все может измениться в любую минуту, поэтому на всякий случай возьмите дождевик.';
            break;
        default :
            out.innerHTML = 'Посмотри на улицу, какая там погода?';
    }
}