import './vendor';
import './helpers';
import './components/social';
import {ieFix} from './vendor/ie-fix';
import {vhFix} from './vendor/vh-fix';
import {actualYear} from './modules/actualYear';
import header from './components/header';
import lazyLoading from './modules/lazyLoading';
import scrollToAnchor from './modules/scrollToAnchor';

ieFix();
vhFix();
actualYear();
scrollToAnchor.init();

header.init();
lazyLoading.init();

// ----- Navigation animation ----- //

const menuBtn = document.querySelector(".menu-btn");
const hamburger = document.querySelector(".menu-btn__burger");
const nav = document.querySelector(".mobile-menu-page");
const menuNav = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".menu-nav__item");
const page = document.querySelector("html");

let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
	if(!showMenu) {
		hamburger.classList.add("open");
		nav.classList.add("open");
		menuNav.classList.add("open");
		navItems.forEach(item => item.classList.add("open"));
    page.classList.add("open");

		showMenu = true;
	} else {
		hamburger.classList.remove("open");
		nav.classList.remove("open");
		menuNav.classList.remove("open");
		navItems.forEach(item => item.classList.remove("open"));
    page.classList.remove("open");

		showMenu = false;
	}
}

// ----- END Navigation animation ----- //

// ----- Modal window ----- //

const modal = document.querySelector("#myModal");
const btn = document.querySelector("#modalBtn");
const close = document.querySelector(".modal-close-btn");

btn.onclick = function() {
  modal.style.display = "block";
}

close.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// ----- END Modal window ----- //