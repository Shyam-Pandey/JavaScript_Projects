let time_val = document.querySelector(".stop-watch .time");
let start_btn = document.querySelector(".start");
let stop_btn = document.querySelector(".stop");
let reset_btn = document.querySelector(".reset");

let counter = 0;
let interval = null;

function timer() {
    counter++;

    let hours = Math.floor(counter/3600);
    let minute = Math.floor((counter - (hours*3600))/60);
    let second = counter%60

    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minute < 10) {
        minute = "0" + minute;
    }
    if (second < 10) {
            second = "0" + second;
        }
    
    time_val.innerHTML = `${hours}:${minute}:${second}`;
}

function start() {
    if (interval)
        return;
    interval = setInterval(timer, 1000);
}

function stop() {
    clearInterval(interval);
    interval = null;
}

function reset() {
    stop();
    time_val.innerHTML = '00:00:00';
}

start_btn.addEventListener('click', start);
stop_btn.addEventListener('click', stop);
reset_btn.addEventListener('click', reset);

