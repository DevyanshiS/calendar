"use strict";

const currDate= new Date();

const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

/* info */
// const strCurrDate=currDate.toDateString();
// document.querySelector(".currDate").innerHTML=strCurrDate;


/* CAL DAYS AND DATES */
let currYear = currDate.getFullYear();
let currMonth = currDate.getMonth();

const renderCalendar=()=>{
    let firstDayOfMonth = new Date(currYear,currMonth,1).getDay();
    console.log(firstDayOfMonth);
    let lastDayOfMonth = new Date(currYear,currMonth,0).getDay();
    console.log(lastDayOfMonth);
    let lastDateOfMonth = new Date(currYear,currMonth+1,0).getDate();
    console.log(lastDateOfMonth);
    let lastDateOfLastMonth = new Date(currYear,currMonth,0).getDate();
    console.log(lastDateOfLastMonth);


    let datesTag= document.querySelector(".dates");
    datesTag.innerHTML = ""; // Clear previous dates so that when month chnages new dates can be added

    // creating li of previous month last days
    for (let i = firstDayOfMonth; i > 0; i--) {
        datesTag.innerHTML += `<li class="inactive">${lastDateOfLastMonth - i + 1}</li>`;
    }
    // creating li of all days of current month
    for (let i = 1; i <= lastDateOfMonth; i++) { 
        // adding active class to li if the current day, month, and year matched
        function isToday(date) {
            // const today = new Date();
            return date.getDate() === currDate.getDate() &&
                   date.getMonth() === currDate.getMonth() &&
                   date.getFullYear() === currDate.getFullYear();
        }

        // Inside the loop
        let isTodayClass = isToday(new Date(currYear, currMonth, i)) ? "active" : "";
        // let isToday = i === currDate.getDate() && currMonth === new Date().getMonth() 
        //              && currYear === new Date().getFullYear() ? "active" : "";
        datesTag.innerHTML += `<li class="${isTodayClass}">${i}</li>`;
    }
    // creating li of next month first days
    for (let i = lastDayOfMonth; i < 6; i++) { 
        datesTag.innerHTML += `<li class="inactive">${i - lastDayOfMonth + 1}</li>`
    }
    // passing current mon and yr as currentDate text
    document.querySelector(".currDate").innerHTML = `${months[currMonth]} ${currYear}`; 
}
renderCalendar();


/* ICONS */
document.querySelector(".prev").addEventListener("click",function(){
    currMonth = currMonth - 1 ;
    if(currMonth<0){
        currYear = currYear - 1;
        currMonth = 11;             // reset curren month to december
    }
    renderCalendar();
});

document.querySelector(".next").addEventListener("click",function(){
    currMonth = currMonth + 1 ;
    if(currMonth>11){
        currYear = currYear + 1;
        currMonth = 0;             // reset curren month to jan
    }
    renderCalendar();
});




//finding number of days in a month
// function daysInMonth(year,month){
//     return new Date(year,month,0).getDate();
// }


// function myFunction() {
//     var today = new Date();
//     var month = today.getMonth();
//     console.log(month);
// }
