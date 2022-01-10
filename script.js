const body = document.querySelector("body");
const nightWindow1 = document.querySelectorAll(".night-window1");
const nightWindow2 = document.querySelectorAll(".night-window2");
const nightWindow3 = document.querySelectorAll(".night-window3");
const nightWindow4 = document.querySelectorAll(".night-window4");
const nightWindow5 = document.querySelectorAll(".night-window5");
const nightWindow6 = document.querySelectorAll(".night-window6");
const nightBuilding = document.querySelectorAll(".night-building");

body.addEventListener("click", (e) => {
  body.classList.toggle("night");
  nightWindow1.forEach((window) => window.classList.toggle("night-window1"));
  nightWindow2.forEach((window) => window.classList.toggle("night-window2"));
  nightWindow3.forEach((window) => window.classList.toggle("night-window3"));
  nightWindow4.forEach((window) => window.classList.toggle("night-window4"));
  nightWindow5.forEach((window) => window.classList.toggle("night-window5"));
  nightWindow6.forEach((window) => window.classList.toggle("night-window6"));
  nightBuilding.forEach((building) =>
    building.classList.toggle("night-building")
  );
});
