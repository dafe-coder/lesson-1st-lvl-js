let ball = document.querySelector('.block img');

ball.addEventListener('click', () => {
    let random = randomInteger(1, 5);
    function randomInteger(min, max) {
        // случайное число от min до (max+1)
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
      }
      
    console.log(random);
    ball.src = `images/ball${random}.png`;
});
let num = 0.1;
console.log(num.toFixed(20));
console.log(Math.random());