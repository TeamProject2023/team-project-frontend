const burger = document.querySelector(".burger");
const navList = document.querySelector(".nav__list");
const body = document.querySelector("body");

if (window.innerWidth <= 767) {
    burger.addEventListener("click", () => {
        burger.classList.toggle("_active");
    });
}