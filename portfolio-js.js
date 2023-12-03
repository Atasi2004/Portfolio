let hamburger = document.getElementById("hamburger-show");

hamburger.addEventListener("click",showHamburger);
function showHamburger(){
    hamburger.classList.toggle("hamburger-show-open");
}