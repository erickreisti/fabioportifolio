"use strict";

const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");
const navMenu = document.querySelector(".nav__links");
const pulseButton = document.querySelector(".pulse-button");
const tooltip = document.querySelector(".tooltip");
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");
const section2 = document.querySelector("#section--2");
const btnTooltip = document.querySelector(".btn--tooltip");

// display menuMobile
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

// display tooltip
pulseButton.addEventListener("click", () => {
  tooltip.classList.toggle("active");
});

// button saiba mais
btnScrollTo.addEventListener("click", (e) => {
  section1.scrollIntoView({ behavior: "smooth" });
});

btnTooltip.addEventListener("click", (e) => {
  section2.scrollIntoView({ behavior: "smooth" });
});
