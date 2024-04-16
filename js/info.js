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

const tour = document.querySelector('#tour');
const tourList = document.querySelector('.tour-list');

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

const event0 = document.querySelector('#event');
const eventList = document.querySelector('.event-list');

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

const booking = document.querySelector('#booking');
const bookingList = document.querySelector('.booking-list');

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

const main = document.querySelector('#main');

main.addEventListener('mouseover', ()=>{
    main.style.backgroundColor = "rgb(0, 0, 0)";
    main.classList.add('borderbottom');
});

main.addEventListener('mouseout', ()=>{
    main.style.backgroundColor = "rgb(0, 0, 0, 0)";
    main.classList.remove('borderbottom');
});

//헤더팝업 이벤트
const popupmenu = document.querySelector('.popupmenu');

function popupClear() {
    popupmenu.classList.add('hidden');
}

const fullMenu = document.querySelector('#full-menu');

fullMenu.addEventListener('click', ()=>{
    popupmenu.classList.remove('hidden');
});

const popUpMenuBox = document.querySelectorAll('.popupmenu-box');
const popUpMenuUl = document.querySelectorAll('.popupmenu-ul');
const popUpMenuA = document.querySelectorAll('.popupmenu-a');

popUpMenuBox[1].addEventListener('mouseover', ()=>{
    popUpMenuUl[0].style.display = "block";
    popUpMenuA[0].innerHTML = "소개·역사 <i class='fa-solid fa-chevron-up'></i>"
});

popUpMenuBox[1].addEventListener('mouseout', ()=>{
    popUpMenuUl[0].style.display = "none";
    popUpMenuA[0].innerHTML = "소개·역사 <i class='fa-solid fa-chevron-down'></i>"
});

popUpMenuBox[2].addEventListener('mouseover', ()=>{
    popUpMenuUl[1].style.display = "block";
    popUpMenuA[1].innerHTML = "관람안내 <i class='fa-solid fa-chevron-up'></i>"
});

popUpMenuBox[2].addEventListener('mouseout', ()=>{
    popUpMenuUl[1].style.display = "none";
    popUpMenuA[1].innerHTML = "관람안내 <i class='fa-solid fa-chevron-down'></i>"
});

popUpMenuBox[3].addEventListener('mouseover', ()=>{
    popUpMenuUl[2].style.display = "block";
    popUpMenuA[2].innerHTML = "행사마당 <i class='fa-solid fa-chevron-up'></i>"
});

popUpMenuBox[3].addEventListener('mouseout', ()=>{
    popUpMenuUl[2].style.display = "none";
    popUpMenuA[2].innerHTML = "행사마당 <i class='fa-solid fa-chevron-down'></i>"
});

popUpMenuBox[4].addEventListener('mouseover', ()=>{
    popUpMenuUl[3].style.display = "block";
    popUpMenuA[3].innerHTML = "예약하기 <i class='fa-solid fa-chevron-up'></i>"
});

popUpMenuBox[4].addEventListener('mouseout', ()=>{
    popUpMenuUl[3].style.display = "none";
    popUpMenuA[3].innerHTML = "예약하기 <i class='fa-solid fa-chevron-down'></i>"
});


//관리소별 연락처 클릭 시 telbox table 보이는 이벤트
const id_telBox = document.querySelector('#telBox')
const select_telBoxTable = document.querySelector('.telBoxTable');
let display = false;

id_telBox.addEventListener('click', ()=>{
    if(display == false) {
        select_telBoxTable.style.display = "inline";
        id_telBox.innerHTML = "관리소별 연락처 <i class='fa-solid fa-chevron-up'></i>"
        display = true;
    } else if (display == true) {
        select_telBoxTable.style.display = "none";
        id_telBox.innerHTML = "관리소별 연락처 <i class='fa-solid fa-chevron-down'></i>"
        display = false; 
    }
});

//설문조사 입력창 
document.querySelector('.reserachButton').addEventListener('click', ()=>{
    let valid = false;
    const reserach = document.getElementsByName('reserach');

    for (var i = 0; i < reserach.length; i++) {
        if (reserach[i].checked) {
            valid = true;
            break;
        }
    }

    if (valid) {
        alert('의견을 남겨주셔서 감사합니다.');
    } else {
        alert('만족도를 선택해주세요.');
    }
});