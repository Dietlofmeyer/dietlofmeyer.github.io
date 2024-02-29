const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();
const hour = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
const dayOfWeek = date.getDay();


const nightStart = 18;
const nightEnd = 6;

const root = document.documentElement;
const skyc = document.getElementById('theSky');
const myHOne = document.getElementById('title');
const timeHours = document.getElementById('time-hours');
const timeMinutes = document.getElementById('time-minutes');
const timeSeconds = document.getElementById('time-seconds');

timeHours.innerText = hour;
timeMinutes.innerText = minutes;
timeSeconds.innerText = seconds;

let nightTime;


checkTime();
setInterval(updateTime, 1000);

function updateTime() {
    // console.log("updating time");
    let updatedTime = new Date();
    timeHours.innerText = updatedTime.getHours();
timeMinutes.innerText = updatedTime.getMinutes();
timeSeconds.innerText = updatedTime.getSeconds();
if (updatedTime.getSeconds() == 0) {
    // console.log("Checking Time");
    checkTime();
} else {
    // console.log("not checking")
}

}



function checkTime(){

    if (hour >= nightStart || hour < nightEnd) {

        // console.log("Night Time");
        root.style.setProperty('--building-color1', '#000');
        root.style.setProperty('--building-color2', '#000');
        root.style.setProperty('--building-color3', '#000');
        root.style.setProperty('--building-color4', '#000');
        root.style.setProperty('--window-color1', '#777');
        root.style.setProperty('--window-color2', '#777');
        root.style.setProperty('--window-color3', '#777');
        root.style.setProperty('--window-color4', '#777');
        skyc.style.setProperty('background', `radial-gradient(
            closest-corner circle at 15% 15%,
            #ccc,
            #ccc 20%,
            #445 21%,
            #223 100%
          )`);
          myHOne.style.setProperty('color', 'white');
          root.style.setProperty('--font-color', '#fff');

        
        } else {
            console.log("Daytime");
            return;
        }

    
}

