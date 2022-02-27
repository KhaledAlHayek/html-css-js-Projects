let button = document.querySelector(".button");
let icon = document.querySelector(".button i");
let text = document.querySelector(".button span")
button.addEventListener("click", () => {
  button.classList.add("active");
  setTimeout(() => {
    button.classList.remove("active");
    icon.className = "fas fa-check-square";
    text.innerHTML = "Completed";
    button.classList.add("disabled");
  }, 5000);
})