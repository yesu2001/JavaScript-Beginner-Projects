const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

const newYear = "1 Jan 2022";

function countdown() {
    const newYearDate = new Date(newYear);
    const curretnDate = new Date();

    const seconds = (newYearDate - curretnDate) / 1000;
    const days = Math.floor(seconds/3600/24);
    const hours = Math.floor(seconds/3600) % 24;
    const minutes = Math.floor(seconds/60) % 60;
    const secs = Math.floor(seconds) % 60;
    
    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTIme(hours);
    minutesEl.innerHTML = formatTIme(minutes);
    secondsEl.innerHTML = formatTIme(secs);
}

function formatTIme(time) {
    return time < 10 ? `0${time}` : time;
}

countdown();
setInterval(countdown, 1000);