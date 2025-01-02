//Age Calculator Start

const btnEl = document.getElementById('btn');
const birthdayEl = document.getElementById("birthday");

const resultEl = document.getElementById("result");

function calculateAge() {
    const birthdayValue = birthdayEl.value;
    if(birthdayValue === "") {
        alert("Please Enter Your Birthday!");
    }else {
        const age = getAge(birthdayValue);
        resultEl.innerText = `You Are ${age} ${age > 1 ? "Years" : "Year"} Old`;
    }
}

function getAge(birthdayValue) {
    const currentDate = new Date();
    const birthdayDate = new Date(birthdayValue);
    let age = currentDate.getFullYear() - birthdayDate.getFullYear();
    const month = currentDate.getMonth() - birthdayDate.getMonth();

    if(month <0 || (month === 0 && currentDate.getDate() < birthdayDate.getDate())) {
        age--;
    }
    return age;
}


btnEl.addEventListener("click", calculateAge);


//New Year Countdown Start

const dayEl = document.getElementById("day");
const hourEl = document.getElementById('hour');
const minuteEl = document.getElementById('minute');
const secondEl = document.getElementById('second');

const newYearTime = new Date("Jan 1, 2025 00:00:00").getTime();

updateCountdown();

 function updateCountdown() {
    const now = new Date().getTime();
    const gap = newYearTime - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const d = Math.floor(gap/day);
    const h = Math.floor((gap % day) / hour);
    const m = Math.floor((gap % hour) / minute);
    const s = Math.floor((gap % minute) / second);

    dayEl.innerText = d;
    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondEl.innerText = s;

    setTimeout(updateCountdown, 1000)

 }