"use strict";

const btnshowmodals = document.querySelectorAll(".show-modal");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");
const closemodal = document.querySelector(".close-modal");

const openmodall = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closemodall = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < 3; i++) {
  btnshowmodals[i].addEventListener("click", openmodall);
}

closemodal.addEventListener("click", closemodall);
overlay.addEventListener("click", closemodall);

document.addEventListener("keydown", function (event) {
  console.log(event.key);
  if (event.key === "Escape" && !modal.classList.contains("hidden"))
    closemodall();
});
