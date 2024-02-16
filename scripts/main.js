// Hamburger menü *******************************************************

const hamburger = document.querySelector('.hamburger');
const navItems = document.querySelector('.nav-items');

const line1 = document.querySelector('.line-1');
const line2 = document.querySelector('.line-2');
const line3 = document.querySelector('.line-3');



hamburger.addEventListener ('click',() => {
    navItems.classList.toggle('active');

    line1.classList.toggle('line-1-active');
    line2.classList.toggle('line-2-active');
    line3.classList.toggle('line-3-active');

});


//Banner-animation & Pictures section animation ****************************

//banner pics
let paprikaRed = document.getElementById('paprika-red');
let paprikaGreen = document.getElementById('paprika-green');
let paprikaBigRed = document.getElementById('paprika-big-red');
let tomatoBottom = document.getElementById('tomato-bottom');
let tomatoRight = document.getElementById('tomato-right');
let avocado = document.getElementById('avocado');
let plantTop = document.getElementById('plant-top');
let plantLeft = document.getElementById('plant-left');
// picture section pics
let firstPicItem = document.getElementById('pics-top')
let secondPicItem = document.getElementById('pics-bottom')

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    //banner pics
    paprikaRed.style.transform = 'translateX(' + (value * -0.1) + 'px)';
    paprikaGreen.style.transform = 'translateX(' + (value * 0.1) + 'px)';
    paprikaBigRed.style.transform = 'translateX(' + (value * -0.1) + 'px)';
    tomatoBottom.style.transform = 'translateX(' + (value * 0.1) + 'px)';
    tomatoRight.style.transform = 'translateX(' + (value * 0.1) + 'px)';
    avocado.style.transform = 'translateX(' + (value * 0.1) + 'px)';
    plantTop.style.transform = 'translateX(' + (value * -0.1) + 'px)';
    plantLeft.style.transform = 'translateX(' + (value * -0.1) + 'px)';
    // picture section pics
    firstPicItem.style.transform = 'translateX(' + (value * 0.05) + 'px)';
    secondPicItem.style.transform = 'translateX(' + (value * -0.05) + 'px)';

})






