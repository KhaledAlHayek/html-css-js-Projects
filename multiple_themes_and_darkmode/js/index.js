// show themes menu 
let showPalette = document.querySelector(".menu .theme");
let paletteMenu = document.querySelector(".menu .theme .color-box");
showPalette.addEventListener("click", () => {
  showPalette.classList.toggle("open");
})

// switch themes
let buttons = document.querySelectorAll(".color-box .colors button");
buttons.forEach(btn => {
  btn.addEventListener("click", e => {
    for(var button of buttons){
      button.classList.remove("active");
    }
    e.currentTarget.classList.add("active");
    document.body.className = "";
    document.body.classList.add(e.currentTarget.dataset.theme);
  })
});