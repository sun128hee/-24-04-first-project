//event.js

const header = document.querySelector('header');
const changeHeight = header.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
    if (window.scrollY > changeHeight) {
        header.style.backgroundColor = "rgb(0, 0, 0, 0.8)";
    }
    else {
        header.style.backgroundColor = null;
    }
});

const id_telBox = document.querySelector('#telBox')
const select_telBoxTable = document.querySelector('.telBoxTable');
let display = false;

id_telBox.addEventListener('click', () => {
    if (display == false) {
        select_telBoxTable.style.display = "inline";
        display = true;
    } else if (display == true) {
        select_telBoxTable.style.display = "none";
        display = false;
    }
});


let date = new Date();

let theYear = date.getFullYear();
let theMonth = date.getMonth() + 1

const monthText = document.querySelector('.monthText');

monthText.textContent = theYear + ". " + theMonth;


const slideItem = document.querySelectorAll('.slide-item');
const slide = document.querySelector('.slide');

function clickPrev() {
    slideItem[0].style.transform = "translateX(-800px)";
    slideItem[1].style.transform = "translateX(-800px)";
    slideItem[2].style.transform = "translateX(-800px)";
    slideItem[3].style.transform = "translateX(-800px)";
}

function clickNext() {
    slideItem[0].style.transform = "translateX(0px)";
    slideItem[1].style.transform = "translateX(0px)";
    slideItem[2].style.transform = "translateX(0px)";
    slideItem[3].style.transform = "translateX(0px)";
}

const popUp = document.querySelectorAll('.pop-up');
const infoButton = document.querySelectorAll('.info-button');


infoButton[0].addEventListener('click', ()=>{
    popUp[0].classList.remove('hidden');
});

function clear1() {
    popUp[0].classList.add('hidden');
}