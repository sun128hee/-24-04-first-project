//실험.js

// Div 사이즈 동적 조절

const outer = document.querySelector(".outer");
const innerGrp = document.querySelector(".inner-grp");
const inners = document.querySelectorAll(".inner");

let currentIndex = 0;

inners.forEach(inner => {
    inner.style.width = `${outer.clientWidth}px`;
    console.log(outer.clientWidth);
});

innerGrp.style.width = `${outer.clientWidth * inners.length}px`;

// Event Listener

const buttonLeft = document.querySelector(".button-left");
const buttonRight = document.querySelector(".button-right");

buttonLeft.addEventListener("click", () => {
    currentIndex--;
    currentIndex = currentIndex < 0 ? 0 : currentIndex;
    innerGrp.style.marginLeft = `-${outer.clientWidth * currentIndex}px`;
});

buttonRight.addEventListener("click", () => {
    currentIndex++;
    currentIndex =
        currentIndex >= inners.length ? inners.length - 1 : currentIndex;
    innerGrp.style.marginLeft = `-${outer.clientWidth * currentIndex}px`;
});


let today = new Date();

let todayYear = today.getFullYear();

let todayMonth = today.getMonth() + 1;

let today_yearMonth = todayYear + " - " + todayMonth;

document.getElementById("yearMonth").innerHTML= today_yearMonth;

let firstDate = new Date(today.getFullYear(), today.getMonth(),1);
let lastDate = new Date(today.getFullYear(), today.getMonth()+1,0);
let day = firstDate.getDay();
let calendar = document.getElementById("calendar_table");
let week = Math.ceil(lastDate.getDate()/7) + 1;
// let row = calendar.insertRow();

function buildCalendar(){
    let leftDays = 7; // setDays 와 반비례 
    let setDays = 1;// leftDays 와 반비례 
    for(i = 1; i < week; i++){
        let row = calendar.insertRow();
        while(day != 0){
            row.insertCell().innerHTML = "";
            day -= 1;
            leftDays -= 1;
        } // 1주
        while(leftDays != 0){
            if(setDays > lastDate.getDate()){
                row.insertCell().innerHTML = "";
                leftDays -= 1;
            }else{
                row.insertCell().innerHTML = setDays;
                setDays +=1;
                leftDays -= 1;
            }
        }
        leftDays = 7;
    }
}
buildCalendar();