//info.js

//header 스크롤시 배경 생성
const header = document.querySelector('header');
const changeHeight = header.getBoundingClientRect().height;

document.addEventListener("scroll", ()=>{
    if(window.scrollY > changeHeight) {
        header.style.backgroundColor = "rgb(0, 0, 0)";
    }
    else {
        header.style.backgroundColor = null;
    }
});


//헤더 메뉴 이벤트
const info =  document.querySelector('#info');
const infoList = document.querySelector('.info-list');
const tour = document.querySelector('#tour');
const tourList = document.querySelector('.tour-list');
const event0 = document.querySelector('#event');
const eventList = document.querySelector('.event-list');
const booking = document.querySelector('#booking');
const bookingList = document.querySelector('.booking-list');
const main = document.querySelector('#main');

info.addEventListener('mouseover', ()=>{
    infoList.style.display = "inline";
    info.style.backgroundColor = "rgb(0, 0, 0)";
    info.classList.add('borderbottom');
    infoList.style.backgroundColor = "rgb(0, 0, 0)";
});

info.addEventListener('mouseout', ()=>{
    infoList.style.display = "none";
    info.style.backgroundColor = "rgb(0, 0, 0, 0)";
    info.classList.remove('borderbottom');
});

tour.addEventListener('mouseover', ()=>{
    tourList.style.display = "inline";
    tour.style.backgroundColor = "rgb(0, 0, 0)";
    tour.classList.add('borderbottom');
    tourList.style.backgroundColor = "rgb(0, 0, 0)";

});

tour.addEventListener('mouseout', ()=>{
    tourList.style.display = "none";
    tour.style.backgroundColor = "rgb(0, 0, 0, 0)";
    tour.classList.remove('borderbottom');
});

event0.addEventListener('mouseover', ()=>{
    eventList.style.display = "inline";
    event0.style.backgroundColor = "rgb(0, 0, 0)";
    event0.classList.add('borderbottom');
    eventList.style.backgroundColor = "rgb(0, 0, 0)";
});

event0.addEventListener('mouseout', ()=>{
    eventList.style.display = "none";
    event0.style.backgroundColor = "rgb(0, 0, 0, 0)";
    event0.classList.remove('borderbottom');
});

booking.addEventListener('mouseover', ()=>{
    bookingList.style.display = "inline";
    booking.style.backgroundColor = "rgb(0, 0, 0)";
    booking.classList.add('borderbottom');
    bookingList.style.backgroundColor = "rgb(0, 0, 0)";
});

booking.addEventListener('mouseout', ()=>{
    bookingList.style.display = "none";
    booking.style.backgroundColor = "rgb(0, 0, 0, 0)";
    booking.classList.remove('borderbottom');
});

main.addEventListener('mouseover', ()=>{
    main.style.backgroundColor = "rgb(0, 0, 0)";
    main.classList.add('borderbottom');
});

main.addEventListener('mouseout', ()=>{
    main.style.backgroundColor = "rgb(0, 0, 0, 0)";
    main.classList.remove('borderbottom');
});



//관리소별 연락처 클릭 시 telbox table 생성
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