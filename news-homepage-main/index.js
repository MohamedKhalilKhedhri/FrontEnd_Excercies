let open = document.querySelector(".navbtn");
let close = document.querySelector(".closebtn");
let nav = document.querySelector("nav");
let isNavOpen = false; // Track the state of the navigation menu

function affiche() {
    if (!isNavOpen) {
        nav.style.transform = "translateX(0%)";
        open.style.display = "none";
        isNavOpen = true;
    } else {
        nav.style.transform = "translateX(100%)";
        open.style.display = "block";
        isNavOpen = false;

    }
}