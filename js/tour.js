//tour.js

const header = document.querySelector('header');
const changeHeight = header.getBoundingClientRect().height;

document.addEventListener("scroll", ()=>{
    if(window.scrollY > changeHeight) {
        header.style.backgroundColor = "rgb(0, 0, 0, 0.8)";
    }
    else {
        header.style.backgroundColor = null;
    }
});

const div_mapfull = document.querySelector('.mapfull');
const div_maptour = document.querySelector('.maptour');
const div_mapshop = document.querySelector('.mapshop');
const id_mapimg = document.querySelector('#mapImg')

function clickMapfull(){
    id_mapimg.src = "../자료/전체맵.jpg";
}

function clickMaptour(){
    id_mapimg.src = "../자료/둘러보기맵.jpg";
}

function clickmapshop(){
    id_mapimg.src = "../자료/편의시설맵.jpg";
}

const id_telBox = document.querySelector('#telBox')
const select_telBoxTable = document.querySelector('.telBoxTable');
let display = false;

id_telBox.addEventListener('click', ()=>{
    if(display == false) {
        select_telBoxTable.style.display = "inline";
        display = true;
    } else if (display == true) {
        select_telBoxTable.style.display = "none";
        display = false; 
    }
});