// declare menu, closeMenu, navbar and header
let menu = document.querySelector(".menu");
let closeImg = document.querySelector(".closeImg");
let navbar = document.querySelector(".navbar");
let header = document.querySelector(".header");
let goUp = document.querySelector(".goUp");
// let headerBtn = document.querySelector(".headerBtn");

// window loading vanish loader
let loader = document.querySelector(".loader");
window.onload = () => { 
  loader.classList.add("active");
}

// if menu onclick view navbar 
menu.onclick = () =>{
    navbar.classList.toggle("active");
    menu.classList.toggle("closeImg");
}
// headerBtn.onclick = () =>{
//     navbar.classList.toggle("active");
//     menu.classList.remove("closeImg");
// }
window.onscroll = () =>{
    if (window.scrollY > 120){
        goUp.classList.add("active");
        navbar.classList.remove("active");
        menu.classList.remove("closeImg");

    }else{
        goUp.classList.remove("active");
        menu.classList.remove("closeImg");
    }
}

// when nav link is clicked add active class
// remove current active class
let navLink = document.querySelectorAll(".header .container .navbar .nav li a");
Array.from(navLink).forEach((item, index) => {
  item.onclick = (e) => {
    let currentNavLink = document.querySelector(".header .container .navbar .nav li a.active");
    currentNavLink.classList.remove("active");
    e.target.classList.add("active");
    navbar.classList.remove("active");
    menu.classList.remove("closeImg");
  }
});

// aos Animation 