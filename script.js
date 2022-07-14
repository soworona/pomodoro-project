const pomodoroTab = document.getElementById("pomodoro");
const shortBreakTab = document.getElementById("shortBreak");
const longBreakTab = document.getElementById("longBreak");

const pomodoroTabContent= document.getElementById("pomodoro-content");
const shortBreakTabContent= document.getElementById("short-break-content");
const longBreakTabContent= document.getElementById("long-break-content");

pomodoroTab.addEventListener("click", function() {
    shortBreakTab.classList.remove("active");
    longBreakTab.classList.remove("active");
    pomodoroTab.classList.add("active");

    pomodoroTabContent.classList.add("active");
    shortBreakTabContent.classList.remove("active");
    longBreakTabContent.classList.remove("active");
});
shortBreakTab.addEventListener("click", function() {
    shortBreakTab.classList.add("active");
    longBreakTab.classList.remove("active");
    pomodoroTab.classList.remove("active");

    pomodoroTabContent.classList.remove("active");
    shortBreakTabContent.classList.add("active");
    longBreakTabContent.classList.remove("active");
});
longBreakTab.addEventListener("click", function() {
    shortBreakTab.classList.remove("active");
    longBreakTab.classList.add("active");
    pomodoroTab.classList.remove("active");

    pomodoroTabContent.classList.remove("active");
    shortBreakTabContent.classList.remove("active");
    longBreakTabContent.classList.add("active");
});

//timer to develop

function timer(seconds) {
    const now = Date.now();
    const then = now + (seconds *1000);
    const timerInterval = setInterval(function() {
    const secondsLeft = Math.round((then-Date.now()) /1000);
    displayTime(secondsLeft,pomodoroTime);

    if(secondsLeft < 1)
        clearInterval(timerInterval);
    },1000);
};

function displayTime(seconds, element){
    const minute = Math.floor(seconds/60);
    const second = seconds % 60;

    console.log ({minute,second});
    element.innerText= minute + " : " + second;
}
 
const pomodoroTime= document.getElementById("pomodoroTime");
const pomodoroButton= document.getElementById("pomodoroButton");

pomodoroButton.addEventListener("click",function(){
    const pomodoroTotalTime=1500;
    timer(pomodoroTotalTime);
});


