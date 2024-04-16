//event.js

//header 스크롤시 배경 생성
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
        id_telBox.innerHTML = "관리소별 연락처 <i class='fa-solid fa-chevron-up'></i>"
        display = true;
    } else if (display == true) {
        select_telBoxTable.style.display = "none";
        id_telBox.innerHTML = "관리소별 연락처 <i class='fa-solid fa-chevron-down'></i>"
        display = false; 
    }
});


//달력 상단에 날짜Text 추가
let date = new Date();

let theYear = date.getFullYear();
let theMonth = date.getMonth() + 1

const monthText = document.querySelector('.monthText');

monthText.textContent = theYear + ". " + theMonth;


//이미지 슬라이드 이벤트
const slideItem = document.querySelectorAll('.slide-item');
const slide = document.querySelector('.slide');

function clickNext() {
    slideItem[0].style.transform = "translateX(-760px)";
    slideItem[1].style.transform = "translateX(-760px)";
    slideItem[2].style.transform = "translateX(-760px)";
    slideItem[3].style.transform = "translateX(-760px)";
}

function clickPrev() {
    slideItem[0].style.transform = "translateX(0px)";
    slideItem[1].style.transform = "translateX(0px)";
    slideItem[2].style.transform = "translateX(0px)";
    slideItem[3].style.transform = "translateX(0px)";
}


//자세히보기 팝업 이벤트
const popUp = document.querySelectorAll('.pop-up');
const infoButton = document.querySelectorAll('.info-button');


infoButton[0].addEventListener('click', ()=>{
    popUp[0].classList.remove('hidden');
});

function clear1() {
    popUp[0].classList.add('hidden');
}

infoButton[1].addEventListener('click', ()=>{
    popUp[1].classList.remove('hidden');
});

function clear2() {
    popUp[1].classList.add('hidden');
}

infoButton[2].addEventListener('click', ()=>{
    popUp[2].classList.remove('hidden');
});

function clear3() {
    popUp[2].classList.add('hidden');
}

infoButton[3].addEventListener('click', ()=>{
    popUp[3].classList.remove('hidden');
});

function clear4() {
    popUp[3].classList.add('hidden');
}


//전체, 궁궐·종묘, 조선왕릉 클릭시 이벤트
document.querySelector('.select-2').addEventListener('click', ()=>{
    document.querySelector('.slide').classList.add('hidden');
});

document.querySelector('.select-1').addEventListener('click', ()=>{
    document.querySelector('.slide').classList.remove('hidden');
});

document.querySelector('.slect-full').addEventListener('click', ()=>{
    document.querySelector('.slide').classList.remove('hidden');
});


//달력 이벤트
const day = document.querySelectorAll('.day');

day[0].addEventListener('click', ()=>{
    document.querySelector('.slide').classList.remove('hidden');
    slideItem[0].classList.add('hidden-none');
    slideItem[1].classList.remove('hidden-none');
    slideItem[2].classList.remove('hidden-none');
    slideItem[3].classList.add('hidden-none');
});

day[1].addEventListener('click', ()=>{
    document.querySelector('.slide').classList.remove('hidden');
    slideItem[0].classList.add('hidden-none');
    slideItem[1].classList.add('hidden-none');
    slideItem[2].classList.add('hidden-none');
    slideItem[3].classList.add('hidden-none');
});

day[2].addEventListener('click', ()=>{
    document.querySelector('.slide').classList.remove('hidden');
    slideItem[0].classList.remove('hidden-none');
    slideItem[1].classList.remove('hidden-none');
    slideItem[2].classList.remove('hidden-none');
    slideItem[3].classList.add('hidden-none');
});

day[3].addEventListener('click', ()=>{
    document.querySelector('.slide').classList.remove('hidden');
    slideItem[0].classList.remove('hidden-none');
    slideItem[1].classList.remove('hidden-none');
    slideItem[2].classList.remove('hidden-none');
    slideItem[3].classList.add('hidden-none');
});

day[4].addEventListener('click', ()=>{
    document.querySelector('.slide').classList.remove('hidden');
    slideItem[0].classList.remove('hidden-none');
    slideItem[1].classList.remove('hidden-none');
    slideItem[2].classList.remove('hidden-none');
    slideItem[3].classList.add('hidden-none');
});

day[5].addEventListener('click', ()=>{
    document.querySelector('.slide').classList.remove('hidden');
    slideItem[0].classList.remove('hidden-none');
    slideItem[1].classList.remove('hidden-none');
    slideItem[2].classList.remove('hidden-none');
    slideItem[3].classList.remove('hidden-none');
});

day[6].addEventListener('click', ()=>{
    document.querySelector('.slide').classList.remove('hidden');
    slideItem[0].classList.remove('hidden-none');
    slideItem[1].classList.remove('hidden-none');
    slideItem[2].classList.remove('hidden-none');
    slideItem[3].classList.remove('hidden-none');
});

day[7].addEventListener('click', ()=>{
    document.querySelector('.slide').classList.remove('hidden');
    slideItem[0].classList.add('hidden-none');
    slideItem[1].classList.remove('hidden-none');
    slideItem[2].classList.remove('hidden-none');
    slideItem[3].classList.add('hidden-none');
});

day[8].addEventListener('click', ()=>{
    document.querySelector('.slide').classList.remove('hidden');
    slideItem[0].classList.add('hidden-none');
    slideItem[1].classList.add('hidden-none');
    slideItem[2].classList.add('hidden-none');
    slideItem[3].classList.add('hidden-none');
});

day[9].addEventListener('click', ()=>{
    document.querySelector('.slide').classList.remove('hidden');
    slideItem[0].classList.remove('hidden-none');
    slideItem[1].classList.remove('hidden-none');
    slideItem[2].classList.remove('hidden-none');
    slideItem[3].classList.remove('hidden-none');
});

day[10].addEventListener('click', ()=>{
    document.querySelector('.slide').classList.remove('hidden');
    slideItem[0].classList.remove('hidden-none');
    slideItem[1].classList.remove('hidden-none');
    slideItem[2].classList.remove('hidden-none');
    slideItem[3].classList.add('hidden-none');
});

day[11].addEventListener('click', ()=>{
    document.querySelector('.slide').classList.remove('hidden');
    slideItem[0].classList.remove('hidden-none');
    slideItem[1].classList.remove('hidden-none');
    slideItem[2].classList.remove('hidden-none');
    slideItem[3].classList.add('hidden-none');
});

day[12].addEventListener('click', ()=>{
    document.querySelector('.slide').classList.remove('hidden');
    slideItem[0].classList.remove('hidden-none');
    slideItem[1].classList.remove('hidden-none');
    slideItem[2].classList.remove('hidden-none');
    slideItem[3].classList.remove('hidden-none');
});

day[13].addEventListener('click', ()=>{
    document.querySelector('.slide').classList.remove('hidden');
    slideItem[0].classList.remove('hidden-none');
    slideItem[1].classList.remove('hidden-none');
    slideItem[2].classList.remove('hidden-none');
    slideItem[3].classList.remove('hidden-none');
});

day[14].addEventListener('click', ()=>{
    document.querySelector('.slide').classList.remove('hidden');
    slideItem[0].classList.add('hidden-none');
    slideItem[1].classList.remove('hidden-none');
    slideItem[2].classList.remove('hidden-none');
    slideItem[3].classList.add('hidden-none');
});

day[15].addEventListener('click', ()=>{
    document.querySelector('.slide').classList.remove('hidden');
    slideItem[0].classList.add('hidden-none');
    slideItem[1].classList.add('hidden-none');
    slideItem[2].classList.add('hidden-none');
    slideItem[3].classList.add('hidden-none');
});

day[16].addEventListener('click', ()=>{
    document.querySelector('.slide').classList.remove('hidden');
    slideItem[0].classList.remove('hidden-none');
    slideItem[1].classList.remove('hidden-none');
    slideItem[2].classList.remove('hidden-none');
    slideItem[3].classList.add('hidden-none');
});

day[17].addEventListener('click', ()=>{
    document.querySelector('.slide').classList.remove('hidden');
    slideItem[0].classList.remove('hidden-none');
    slideItem[1].classList.remove('hidden-none');
    slideItem[2].classList.remove('hidden-none');
    slideItem[3].classList.add('hidden-none');
});

day[18].addEventListener('click', ()=>{
    document.querySelector('.slide').classList.remove('hidden');
    slideItem[0].classList.remove('hidden-none');
    slideItem[1].classList.remove('hidden-none');
    slideItem[2].classList.remove('hidden-none');
    slideItem[3].classList.add('hidden-none');
});

day[19].addEventListener('click', ()=>{
    document.querySelector('.slide').classList.remove('hidden');
    slideItem[0].classList.remove('hidden-none');
    slideItem[1].classList.remove('hidden-none');
    slideItem[2].classList.remove('hidden-none');
    slideItem[3].classList.remove('hidden-none');
});

day[20].addEventListener('click', ()=>{
    document.querySelector('.slide').classList.remove('hidden');
    slideItem[0].classList.remove('hidden-none');
    slideItem[1].classList.remove('hidden-none');
    slideItem[2].classList.remove('hidden-none');
    slideItem[3].classList.remove('hidden-none');
});

day[21].addEventListener('click', ()=>{
    document.querySelector('.slide').classList.remove('hidden');
    slideItem[0].classList.add('hidden-none');
    slideItem[1].classList.remove('hidden-none');
    slideItem[2].classList.remove('hidden-none');
    slideItem[3].classList.add('hidden-none');
});

day[22].addEventListener('click', ()=>{
    document.querySelector('.slide').classList.remove('hidden');
    slideItem[0].classList.add('hidden-none');
    slideItem[1].classList.add('hidden-none');
    slideItem[2].classList.add('hidden-none');
    slideItem[3].classList.add('hidden-none');
});

day[23].addEventListener('click', ()=>{
    document.querySelector('.slide').classList.remove('hidden');
    slideItem[0].classList.add('hidden-none');
    slideItem[1].classList.remove('hidden-none');
    slideItem[2].classList.remove('hidden-none');
    slideItem[3].classList.add('hidden-none');
});

day[24].addEventListener('click', ()=>{
    document.querySelector('.slide').classList.remove('hidden');
    slideItem[0].classList.remove('hidden-none');
    slideItem[1].classList.remove('hidden-none');
    slideItem[2].classList.remove('hidden-none');
    slideItem[3].classList.add('hidden-none');
});

day[25].addEventListener('click', ()=>{
    document.querySelector('.slide').classList.remove('hidden');
    slideItem[0].classList.remove('hidden-none');
    slideItem[1].classList.remove('hidden-none');
    slideItem[2].classList.remove('hidden-none');
    slideItem[3].classList.add('hidden-none');
});

day[26].addEventListener('click', ()=>{
    document.querySelector('.slide').classList.remove('hidden');
    slideItem[0].classList.remove('hidden-none');
    slideItem[1].classList.remove('hidden-none');
    slideItem[2].classList.remove('hidden-none');
    slideItem[3].classList.remove('hidden-none');
});

day[27].addEventListener('click', ()=>{
    document.querySelector('.slide').classList.remove('hidden');
    slideItem[0].classList.remove('hidden-none');
    slideItem[1].classList.remove('hidden-none');
    slideItem[2].classList.remove('hidden-none');
    slideItem[3].classList.remove('hidden-none');
});

day[28].addEventListener('click', ()=>{
    document.querySelector('.slide').classList.remove('hidden');
    slideItem[0].classList.add('hidden-none');
    slideItem[1].classList.remove('hidden-none');
    slideItem[2].classList.remove('hidden-none');
    slideItem[3].classList.add('hidden-none');
});

day[29].addEventListener('click', ()=>{
    document.querySelector('.slide').classList.remove('hidden');
    slideItem[0].classList.add('hidden-none');
    slideItem[1].classList.add('hidden-none');
    slideItem[2].classList.add('hidden-none');
    slideItem[3].classList.add('hidden-none');
});