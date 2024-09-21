const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
const closeMenu = document.querySelector("#mobileMenu p");

hamburger.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
});

closeMenu.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
});
