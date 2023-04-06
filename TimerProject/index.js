const seconds  = 1000;
const minutes = 60*seconds;
const hours = 60*minutes;
const day = 24*hours;

const daysElement = document.querySelector(".days");
const hoursElement = document.querySelector(".hours");
const minuteElement = document.querySelector(".minutes");
const secondElement = document.querySelector(".seconds");

const getTimer = ()=>{
    setInterval(()=>{
        
        const destination  = new Date("04/08/2023").getTime();
        const today = new Date().getTime();
    
        const diff = destination - today;
        
    const leftDay =Math.floor(diff/day);
    const leftHours = Math.floor((diff%day)/hours);
    const leftMinutes = Math.floor((diff%hours)/minutes);
    const leftSeconds = Math.floor((diff%minutes)/seconds);

    // console.log(`${leftDay}:${leftHours}:${leftMinutes}:${leftSeconds}`);
        daysElement.innerText = leftDay;
        hoursElement.innerText = leftHours;
        minuteElement.innerText = leftMinutes;
        secondElement.innerText = leftSeconds;

    },0);
}


getTimer();