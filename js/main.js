//mian.js

//경복궁 이야기 이벤트
const div_storybox = document.querySelectorAll('.storybox')
const storyH4 = document.querySelectorAll('.storyH4');
const storyP = document.querySelectorAll('.storyP');

div_storybox[0].addEventListener('mouseover', ()=>{
    div_storybox[0].classList.add('addBackColor');
    div_storybox[0].classList.add('addBorder');
    storyH4[0].innerHTML = "<h4>광화문</h4>";
    storyP[0].innerHTML = "<p>광화문(光化門)은 경복궁의 정문으로 ‘광화’는 ‘군주에 의한 덕화(德化)’라는 뜻이다. 광화문은 다른 궁궐들의 정문과는 달리 돌로 높은 석축을 쌓고 그 위에 중층구조의 누각을 세워서 성곽의 성문과 같은 격식으로 장대하게 지어졌다.</p>";  
});

div_storybox[0].addEventListener('mouseout', ()=>{
    div_storybox[0].classList.remove('addBackColor');
    div_storybox[0].classList.remove('addBorder');
    storyH4[0].innerHTML = null;
    storyP[0].innerHTML = null;
});

div_storybox[1].addEventListener('mouseover', ()=>{
    div_storybox[1].classList.add('addBackColor');
    div_storybox[1].classList.add('addBorder');
    storyH4[1].innerHTML = "<h4>흥례문</h4>";
    storyP[1].innerHTML = "<p>흥례문(興禮門)은 경복궁의 중문으로 ‘흥례’는 ‘예를 일으킨다’라는 뜻이다. 원래 홍례문의 이름은 ‘홍례문’이었으나 1867년(고종 4) 경복궁을 다시 지을 때 지금의 이름으로 바꾸었다.</p>";
});

div_storybox[1].addEventListener('mouseout', ()=>{
    div_storybox[1].classList.remove('addBackColor');
    div_storybox[1].classList.remove('addBorder');
    storyH4[1].innerHTML = null;
    storyP[1].innerHTML = null;
});

div_storybox[2].addEventListener('mouseover', ()=>{
    div_storybox[2].classList.add('addBackColor');
    div_storybox[2].classList.add('addBorder');
    storyH4[2].innerHTML = "<h4>근정전과 근정문</h4>";
    storyP[2].innerHTML = "<p>근정전(勤政殿)은 경복궁의 정전으로 왕의 즉위식, 신하들의 하례, 외국 사신의 접견, 궁중연회 등 중요한 국가행사를 치르던 곳이다. 근정문은 왕의 장례(국장)가 있을 때 다음 왕의 즉위식을 치렀던 곳으로 이곳에서 단종, 성종, 명종이 왕위에 올랐다.</p>";    
});

div_storybox[2].addEventListener('mouseout', ()=>{
    div_storybox[2].classList.remove('addBackColor');
    div_storybox[2].classList.remove('addBorder');
    storyH4[2].innerHTML = null;
    storyP[2].innerHTML = null;
});

div_storybox[3].addEventListener('mouseover', ()=>{
    div_storybox[3].classList.add('addBackColor');
    div_storybox[3].classList.add('addBorder');
    storyH4[3].innerHTML = "<h4>사정전<h4>";
    storyP[3].innerHTML = "<p>사정전(思政殿)의 ‘사정’은 ‘선정을 깊이 생각하다’라는 뜻으로, 왕이 신하들과 함께 일상 업무를 보던 공식 집무실인 편전(便殿)이다. 이곳에서 매일 아침 업무 보고와 회의, 경연 들이 이루어졌다.</p>";
});

div_storybox[3].addEventListener('mouseout', ()=>{
    div_storybox[3].classList.remove('addBackColor');
    div_storybox[3].classList.remove('addBorder');
    storyH4[3].innerHTML = null;
    storyP[3].innerHTML = null;
});

div_storybox[4].addEventListener('mouseover', ()=>{
    div_storybox[4].classList.add('addBackColor');
    div_storybox[4].classList.add('addBorder');
    storyH4[4].innerHTML = "<h4>수정전</h4>";
    storyP[4].innerHTML = "<p>수정전(修政殿)의 ‘수정’은 ‘정치를 잘 수행하다’라는 뜻으로, 고종 대 편전으로 사용했던 건물이다. 경복궁 창건 당시에는 없었으나 고종 대 경복궁을 다시 지을 때 지은 건물이다. 수정전은 2012년 보물로 지정되었다.</p>";
});

div_storybox[4].addEventListener('mouseout', ()=>{
    div_storybox[4].classList.remove('addBackColor');
    div_storybox[4].classList.remove('addBorder');
    storyH4[4].innerHTML = null;
    storyP[4].innerHTML = null;
});

div_storybox[5].addEventListener('mouseover', ()=>{
    div_storybox[5].classList.add('addBackColor');
    div_storybox[5].classList.add('addBorder');
    storyH4[5].innerHTML = "<h4>경회루</h4>";
    storyP[5].innerHTML = "<p>경회루(慶會樓)의 ‘경회’는 ‘경사스러운 연회’라는 뜻으로, 경복궁 침전영역 서쪽에 위치한 연못 안에 조성된 누각이다. 경회루는 왕이 신하들과 규모가 큰 연회를 열거나 외국 사신을 접대하던 곳이다.</p>";
});

div_storybox[5].addEventListener('mouseout', ()=>{
    div_storybox[5].classList.remove('addBackColor');
    div_storybox[5].classList.remove('addBorder');
    storyH4[5].innerHTML = null;
    storyP[5].innerHTML = null;
});

div_storybox[6].addEventListener('mouseover', ()=>{
    div_storybox[6].classList.add('addBackColor');
    div_storybox[6].classList.add('addBorder');
    storyH4[6].innerHTML = "<h4>영추문</h3>";
    storyP[6].innerHTML = "<p>영추문(迎秋門)은 경복궁의 서문으로, ‘영추’는 ‘가을을 맞이한다’라는 뜻이다. 동문인 건춘문과 대비되는 개념의 이름으로 서쪽 방위의 개념에 맞게 지어졌다. 영추문은 주로 문무백관이 출입하던 곳으로 특히 서쪽 궐내각사에 근무하던 신하들이 많이 이용하였다.</p>";
});

div_storybox[6].addEventListener('mouseout', ()=>{
    div_storybox[6].classList.remove('addBackColor');
    div_storybox[6].classList.remove('addBorder');
    storyH4[6].innerHTML = null;
    storyP[6].innerHTML = null;
});

div_storybox[7].addEventListener('mouseover', ()=>{
    div_storybox[7].classList.add('addBackColor');
    div_storybox[7].classList.add('addBorder');
    storyH4[7].innerHTML = "<h4>강녕전</h4>";
    storyP[7].innerHTML = "<p>강녕전(康寧殿)은 교태전과 함께 왕과 왕비가 일상생활을 하던 침전이다. 강녕전은 왕의 침전으로 ‘강녕’은 ‘편안하고 건강하다’라는 뜻이다. 왕은 이곳에서 독서와 휴식 등 일상생활뿐 아니라 신하들과 은밀한 정무를 보기도 하였다.</p>";
});

div_storybox[7].addEventListener('mouseout', ()=>{
    div_storybox[7].classList.remove('addBackColor');
    div_storybox[7].classList.remove('addBorder');
    storyH4[7].innerHTML = null;
    storyP[7].innerHTML = null;
});

div_storybox[8].addEventListener('mouseover', ()=>{
    div_storybox[8].classList.add('addBackColor');
    div_storybox[8].classList.add('addBorder');
    storyH4[8].innerHTML = "<h4>교태전과 아미산 굴뚝</h4>";
    storyP[8].innerHTML = "<p>교태전(交泰殿)은 강녕전과 함께 왕과 왕비가 일상생활을 하던 침전이자, 왕비의 생활공간이다. 교태전은 궁궐의 가장 가운데에 위치하고 있어, 왕비의 생활공간이기 때문에 중궁전이라고도 부른다.</p>";
});

div_storybox[8].addEventListener('mouseout', ()=>{
    div_storybox[8].classList.remove('addBackColor');
    div_storybox[8].classList.remove('addBorder');
    storyH4[8].innerHTML = null;
    storyP[8].innerHTML = null;
});

div_storybox[9].addEventListener('mouseover', ()=>{
    div_storybox[9].classList.add('addBackColor');
    div_storybox[9].classList.add('addBorder');
    storyH4[9].innerHTML = "<h4>자경전과 십장생 굴뚝</h4>";
    storyP[9].innerHTML = "<p>자경전(慈慶殿)의 ‘자경’은 ‘어머니의 복을 누린다’라는 뜻으로, 정조가 왕위에 오른 후 어머니 혜경궁(헌경황후) 홍씨를 위해 창경궁에 지은 ‘자경당’의 유래가 된다.</p>";
});

div_storybox[9].addEventListener('mouseout', ()=>{
    div_storybox[9].classList.remove('addBackColor');
    div_storybox[9].classList.remove('addBorder');
    storyH4[9].innerHTML = null;
    storyP[9].innerHTML = null;
});

div_storybox[10].addEventListener('mouseover', ()=>{
    div_storybox[10].classList.add('addBackColor');
    div_storybox[10].classList.add('addBorder');
    storyH4[10].innerHTML = "<h4>동궁 영역</h4>";
    storyP[10].innerHTML = "<p>동궁(東宮) 영역은 왕세자와 왕세자빈의 교육공간이자 생활공간으로 궁궐의 동쪽에 있어 동궁, 또는 세자궁이라고 부른다.</p>";
});

div_storybox[10].addEventListener('mouseout', ()=>{
    div_storybox[10].classList.remove('addBackColor');
    div_storybox[10].classList.remove('addBorder');
    storyH4[10].innerHTML = null;
    storyP[10].innerHTML = null;
});

div_storybox[11].addEventListener('mouseover', ()=>{
    div_storybox[11].classList.add('addBackColor');
    div_storybox[11].classList.add('addBorder');
    storyH4[11].innerHTML = "<h4>흥복전</h4>";
    storyP[11].innerHTML = "<p>흥복전(興福殿)은 고종 대 경복궁을 다시 지을 때 처음 지어졌으며, ‘흥복’의 뜻은 ‘복을 일으키다’라는 뜻이다. 이곳은 고종 연간에 독일, 일본, 이탈리아, 프랑스 등 외국 사신을 접견했다는 기록이 있다.<p>";
});

div_storybox[11].addEventListener('mouseout', ()=>{
    div_storybox[11].classList.remove('addBackColor');
    div_storybox[11].classList.remove('addBorder');
    storyH4[11].innerHTML = null;
    storyP[11].innerHTML = null;
});

div_storybox[12].addEventListener('mouseover', ()=>{
    div_storybox[12].classList.add('addBackColor');
    div_storybox[12].classList.add('addBorder');
    storyH4[12].innerHTML = "<h4>함화당과 집경당</h4>";
    storyP[12].innerHTML = "<p>함화당(咸和堂)과 집경당(緝敬堂)은 경복궁 창건 당시에는 없었고 1890년(고종 27)에 지은 건물이다. 함화당은 고종의 침전으로 사용되었고, 집경당은 고종이 신하들과 경서를 읽는 곳으로 사용하였다고 한다.</p>";
});

div_storybox[12].addEventListener('mouseout', ()=>{
    div_storybox[12].classList.remove('addBackColor');
    div_storybox[12].classList.remove('addBorder');
    storyH4[12].innerHTML = null;
    storyP[12].innerHTML = null;
});

div_storybox[13].addEventListener('mouseover', ()=>{
    div_storybox[13].classList.add('addBackColor');
    div_storybox[13].classList.add('addBorder');
    storyH4[13].innerHTML = "<h4>건춘문</h4>";
    storyP[13].innerHTML = "<p>건춘문(建春門)은 경복궁의 동문으로, ‘건춘’의 뜻은 ‘봄을 세우다’라는 뜻이다. 건춘문은 주로 왕세자와 동궁 영역이 위치한 관청에서 일하는 신하들이 이용하였다.</p>";
});

div_storybox[13].addEventListener('mouseout', ()=>{
    div_storybox[13].classList.remove('addBackColor');
    div_storybox[13].classList.remove('addBorder');
    storyH4[13].innerHTML = null;
    storyP[13].innerHTML = null;
});

div_storybox[14].addEventListener('mouseover', ()=>{
    div_storybox[14].classList.add('addBackColor');
    div_storybox[14].classList.add('addBorder');
    storyH4[14].innerHTML = "<h4>향원정</h4>";
    storyP[14].innerHTML = "<p>향원정(香遠亭)의 ‘향원’은 ‘향이 멀리 간다’라는 뜻으로, 원래 이곳에는 세조 대에 세운 취로정이 있었다. 원정을 가기 위해 지은 다리는 ‘향기에 취한다’라는 뜻에 취향교(醉香橋)라고 불렀다.</p>";
});

div_storybox[14].addEventListener('mouseout', ()=>{
    div_storybox[14].classList.remove('addBackColor');
    div_storybox[14].classList.remove('addBorder');
    storyH4[14].innerHTML = null;
    storyP[14].innerHTML = null;
});

div_storybox[15].addEventListener('mouseover', ()=>{
    div_storybox[15].classList.add('addBackColor');
    div_storybox[15].classList.add('addBorder');
    storyH4[15].innerHTML = "<h4>건청궁</h4>";
    storyP[15].innerHTML = "<p>건청궁(乾淸宮)은 1873년(고종 10)에 왕과 왕비의 생활공간으로 지어진 궁 안의 궁이다. ‘건청’은 ‘하늘은 맑다’라는 뜻으로, 경복궁에서 가장 북쪽에 위치하고 있다. 이곳에서 고종과 명성황후는 10년 정도 생활하였다.</p>";
});

div_storybox[15].addEventListener('mouseout', ()=>{
    div_storybox[15].classList.remove('addBackColor');
    div_storybox[15].classList.remove('addBorder');
    storyH4[15].innerHTML = null;
    storyP[15].innerHTML = null;
});

div_storybox[16].addEventListener('mouseover', ()=>{
    div_storybox[16].classList.add('addBackColor');
    div_storybox[16].classList.add('addBorder');
    storyH4[16].innerHTML = "<h4>집옥재</h4>";
    storyP[16].innerHTML = "<p>집옥재(集玉齋)는 1891년(고종 28) 창덕궁 함녕전의 별당이었던 집옥재와 협길당 등을 건청궁 서쪽으로 옮겨 지은 것으로, 고종의 서재와 외국 사신을 접견하던 장소로 사용되었다.</p>";
});

div_storybox[16].addEventListener('mouseout', ()=>{
    div_storybox[16].classList.remove('addBackColor');
    div_storybox[16].classList.remove('addBorder');
    storyH4[16].innerHTML = null;
    storyP[16].innerHTML = null;
});

div_storybox[17].addEventListener('mouseover', ()=>{
    div_storybox[17].classList.add('addBackColor');
    div_storybox[17].classList.add('addBorder');
    storyH4[17].innerHTML = "<h4>태원전</h4>";
    storyP[17].innerHTML = "<p>태원전(泰元殿)의 ‘태원’은 ‘하늘’을 뜻하는데, 이곳은 1868년(고종 5)에 지어진 것으로 추정된다. 이곳에 태조의 어진을 모셨고, 이후에는 신정황후 조씨와 명성황후 민씨가 세상을 떠난 후 빈전으로 사용되었다.</p>";
});

div_storybox[17].addEventListener('mouseout', ()=>{
    div_storybox[17].classList.remove('addBackColor');
    div_storybox[17].classList.remove('addBorder');
    storyH4[17].innerHTML = null;
    storyP[17].innerHTML = null;
});

div_storybox[18].addEventListener('mouseover', ()=>{
    div_storybox[18].classList.add('addBackColor');
    div_storybox[18].classList.add('addBorder');
    storyH4[18].innerHTML = "<h4>신무문</h4>";
    storyP[18].innerHTML = "<p>신무문(神武門)은 경복궁은 북문으로, ‘신무’는 ‘뛰어난 무용(武勇)‘ ’신령스러운 현무(玄武)‘라는 뜻이다. 신무문은 1433년(세종 15)에 지어졌다가 1475년(성종 6) 문의 이름을 신무문이라 붙였다.</p>";
});

div_storybox[18].addEventListener('mouseout', ()=>{
    div_storybox[18].classList.remove('addBackColor');
    div_storybox[18].classList.remove('addBorder');
    storyH4[18].innerHTML = null;
    storyP[18].innerHTML = null;
});

div_storybox[19].addEventListener('mouseover', ()=>{
    div_storybox[19].classList.add('addBackColor');
    div_storybox[19].classList.add('addBorder');
    storyH4[19].innerHTML = "<h4>풍기대</h4>";
    storyP[19].innerHTML = "<p>풍기대(風旗臺)는 바람의 방향과 세기를 재는 깃발을 세운 받침대이다. 깃대 끝에 좁고 긴 깃발을 달아 그것이 날리는 방향으로 바람의 방향을 재고 흔들리는 정도로 바람의 세기를 잴 수 있었다.</p>";
});

div_storybox[19].addEventListener('mouseout', ()=>{
    div_storybox[19].classList.remove('addBackColor');
    div_storybox[19].classList.remove('addBorder');
    storyH4[19].innerHTML = null;
    storyP[19].innerHTML = null;
});


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