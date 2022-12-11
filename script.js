// document.getElementById
// document.getElementsByClassName
// document.querySelector
// document.querySelectorAll
// addEventListener

const=navMainMenuLi=document.getElementsByClassName("nav-m-m-li")
const=navMainSubbox=document.getElementsByClassName("nav-m-subbox")



navMainMenuLi.addEventListener('onmouseover', (event) => {
    navMainSubbox.style.display="block";
})