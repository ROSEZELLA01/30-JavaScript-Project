const timer = document.querySelector('#timer');
const years = document.querySelector('#years');
const months = document.querySelector("#days");
const days = document.querySelector('#days');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');

const date = new Date();
const newYear = new Date("Jan 01, 2030 13:37:25").getTime();
function updateTimer() {
    const currentTime = new Date().getTime();
    const diff = newYear - currentTime;
        const d = Math.floor(diff / (1000 * 60 * 60 * 24)); 
        const h = Math.floor((diff % (1000 * 60 * 60 *  24)) / (1000 * 60 * 60));
        const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((diff % (1000 * 60)) / 1000);          

        timer.innerHTML = `
 <div id="days">${d}<span class="text">days</span></div>
            <div id="hours">${h}<span class="text">hours</span></div>
            <div id="minutes">${m}<span class="text">minutes</span></div>
            <div id="seconds">${s}<span class="text">seconds</span></div>`;
 if (diff < 0) {
   clearInterval();
   timer.innerHTML = "EXPIRED";
 }
 console.log(diff);

}
setInterval(updateTimer, 1000);
updateTimer();