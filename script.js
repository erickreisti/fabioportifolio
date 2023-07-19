"use strict";

const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");
const navMenu = document.querySelector(".nav__links");

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
