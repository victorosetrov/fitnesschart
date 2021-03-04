"use strict";

const btns = document.querySelectorAll("button");
const form = document.querySelector("form");
const formAct = document.querySelector("form span");
const input = document.querySelector("input");
const error = document.querySelector(".error");

var activity = "cycling";

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    activity = e.target.dataset.activity;
    btns.forEach((btn) => btn.classList.remove("active"));
    e.target.classList.add("active");
    input.setAttribute("id", activity);
    formAct.textContent = activity;
  });
});
