//info.js

const telBox = document.querySelector('#telBox');


telBox.onclick = () => {
        
        document.querySelector('.telBoxTable').style.display = "Block";
};

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