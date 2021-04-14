'use strict';

const select = document.querySelector('select');
select.addEventListener('change', setWeather);
if(localStorage.getItem('theme') == 'light') {
    document.querySelector('body').style.backgroundColor = '#ffffff';
    document.querySelector('body').style.color = "#000000";
} else {
    document.querySelector('body').style.backgroundColor = "#111111";
    document.querySelector('body').style.color = "#ffffff";
}

function setWeather() {
let option = select.value;
    
    switch (option) {
        case 'light' :
            document.querySelector('body').style.backgroundColor = '#ffffff';
            document.querySelector('body').style.color = "#000000";
            localStorage.setItem('theme', 'light');
            break;
        case 'dark' :
            document.querySelector('body').style.backgroundColor = "#111111";
            document.querySelector('body').style.color = "#ffffff";
            localStorage.setItem('theme', 'dark');
            break;
    }
}