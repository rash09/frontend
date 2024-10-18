
   
    const btn = document.getElementById("btn");
const container = document.getElementById("container");
const stopBtn = document.getElementById("stopperbtn");
const resumeBtn = document.getElementById("resumebtn");
      const cancelBtn = document.getElementById("cancelbtn");
var flag = false;
let clockInterval;

btn.addEventListener("click", handleClick);
stopBtn.addEventListener("click", stopClock);
resumeBtn.addEventListener("click", resumeClock);
     cancelBtn.addEventListener("click", cancelSettime);
    function handleClick(e) {
        if (btn.innerText === "updated") {
            btn.innerText = "Click Me";
            container.innerText = "";
            return;
        }

        let text = "updated";
        btn.innerText = text;
        handleContainer();
    }

    function handleContainer() {
        let content = "the button has been updated";
        container.innerText = content;

    }


function myTimer() {
  const d = new Date();
  container.innerHTML = d.toLocaleTimeString();
}
let setTime=setTimeout(function () {
    clockInterval=setInterval(myTimer, 1000);
},5000)

function stopClock() {
    flag=true
    clearInterval(clockInterval)
}

function resumeClock() {
    if (flag) {
        clockInterval=setInterval(myTimer, 1000);
    }
    flag=false
}

function cancelSettime() {
    clearTimeout(setTime)
}