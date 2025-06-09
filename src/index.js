import "./styles/main.css";
import loadHome from "./modules/home/home";
import loadMenu from "./modules/menu/menu";
import loadContact from "./modules/contact/contact";

const content = document.querySelector("#content");
const home = document.getElementById("home-btn");
const menu = document.getElementById("menu-btn");
const contact = document.getElementById("contact-btn");
home.classList.add("button-selected");

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
    home.classList.add("button-selected");
    menu.classList.remove("button-selected");
    contact.classList.remove("button-selected");
    loadHome();
  });

  document.getElementById("menu-btn").addEventListener("click", () => {
    clearContent();

    menu.classList.add("button-selected");
    home.classList.remove("button-selected");
    contact.classList.remove("button-selected");
    loadMenu();
  });

  document.getElementById("contact-btn").addEventListener("click", () => {
    clearContent();

    contact.classList.add("button-selected");
    menu.classList.remove("button-selected");
    home.classList.remove("button-selected");
    loadContact();
  });
});

const hamburger = document.getElementById("hamburger");
const navbar = document.getElementById("navbar");

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("active");
});
