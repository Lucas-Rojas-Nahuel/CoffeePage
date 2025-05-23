import "./styles/main.css";
import loadHome from "./modules/home/home";
import loadMenu from "./modules/menu/menu";
import loadContact from "./modules/contact/contact";

const content = document.querySelector("#content");

function clearContent() {
  content.innerHTML = "";
}

function loadInitialPage() {
  clearContent();
  loadHome();
}

document.addEventListener("DOMContentLoaded", () => {
  loadInitialPage();

  document.getElementById("home-btn").addEventListener("click", () => {
    clearContent();
    loadHome();
  });

  document.getElementById("menu-btn").addEventListener("click", () => {
    clearContent();
    loadMenu();
  });

  document.getElementById("contact-btn").addEventListener("click", () => {
    clearContent();
    loadContact();
  });
});

const hamburger = document.getElementById("hamburger");
const navbar = document.getElementById("navbar");

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("active");
});
