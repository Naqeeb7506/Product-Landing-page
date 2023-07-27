let menu = document.querySelector(".menu");
let topmenu = document.querySelector(".topmenu");
let cancel = document.querySelector(".cancel");

let links = document.querySelectorAll("nav a");

menu.addEventListener("click", () => {
  topmenu.classList.toggle("hide");
  menu.classList.add("no-opacity");
});

cancel.addEventListener("click", () => {
  topmenu.classList.toggle("hide");
  menu.classList.remove("no-opacity");
});

links.forEach((option) => {
  option.addEventListener("click", () => {
    document.querySelector("nav .active").classList.remove("active");
    option.classList.add("active");
  });
});
