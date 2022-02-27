let hours = document.querySelector(".hours");
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");

const counter = setInterval(() => {
  let date = new Date();
  
  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  
  hours.textContent = hour;
  minutes.textContent = min;
  seconds.textContent = sec < 10 ? `0${sec}` : sec;
}, 1000);

let mainDiv = document.querySelector("main");
let switchTheme = document.querySelector(".switch-mode");

switchTheme.addEventListener("click", () => {
  mainDiv.classList.toggle("dark");
})