//info.js
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