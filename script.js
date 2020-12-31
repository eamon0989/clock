function updateTime() {

const now = new Date();
let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();

if (minutes < 10) {
    minutes = '0' + minutes;
  }
if (seconds < 10) {
    seconds = '0' + seconds;
}


const time = `${hours}:${minutes}:${seconds}`;

const myClock = document.getElementById("clock");
myClock.innerHTML = time;

}