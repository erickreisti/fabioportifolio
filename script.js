"use strict";

const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");
const navMenu = document.querySelector(".nav__links");
const pulseButton = document.querySelector(".pulse-button");
const tooltip = document.querySelector(".tooltip");

// event handler menu hamburguer
hamburger.addEventListener("click", () => {
  if (hamburger) {
    hamburger.classList.add("active");
    navMenu.classList.add("active");
    close.classList.add("active");
  }
});

close.addEventListener("click", () => {
  if (close) {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    close.classList.remove("active");
  }
});

//add event click, and innetHTML
pulseButton.addEventListener("click", () => {
  if (tooltip.style.display === "none") {
    tooltip.style.display = "block";
  } else {
    tooltip.style.display = "none";
  }
});
