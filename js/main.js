const swiper = new Swiper('.projects__container', {
  loop: true,
  simulateTouch: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

/////////////////////////////////////////////////////////////////////////////////////

const toTop = document.querySelector(".to-top__button");

window.addEventListener("scroll", function (el) {
  if (window.scrollY > 946) {
    toTop.classList.add("visible");
    toTop.classList.remove("invisible")
  } else {
    toTop.classList.remove("visible");
  }
});

/////////////////////////////////////////////////////////////////////////////////////

let valueDisplays = document.querySelectorAll(".stats__number");
let interval = 700;

valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  valueDisplay.textContent = startValue;
  let endValue = parseInt(valueDisplay.getAttribute("data-value"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function(){
    startValue += 1
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
      return
    }
  }, duration);
})

/////////////////////////////////////////////////////////////////////////////////////

const mobileButton = document.querySelector(".mobile__button");

function toggleMenu(event) {

  if (event.type === "touchstart"){
    event.preventDefault();
  }

  const nav = document.querySelector(".nav__menu");
  nav.classList.toggle("active");
}

mobileButton.addEventListener("click", toggleMenu);
mobileButton.addEventListener("touchstart", toggleMenu);

/////////////////////////////////////////////////////////////////////////////////////

const showButton = document.querySelectorAll(".items-button");
showButton.forEach(ev => {
  ev.addEventListener("click", () => {
    ev.classList.toggle("open");
    let backendList = document.querySelector(".backend__details");
    let frontendList = document.querySelector(".frontend__details");
    console.log()
    if (ev.attributes["data-set"].textContent === "frontEnd") {
      frontendList.classList.toggle("visible-skills");
    }
    if (ev.attributes["data-set"].textContent === "backEnd") {
      backendList.classList.toggle("visible-skills");
    }
  });
});
  
/////////////////////////////////////////////////////////////////////////////////////
  
const darkTheme = document.querySelector("#button__darkmode");


const body = document.querySelector("body");
const header = document.querySelector(".header__content");
const text = document.querySelectorAll(".text");
const button = document.querySelectorAll(".btn");

darkTheme.addEventListener("click", () => {

  body.classList.toggle("body-darkmode")
  header.classList.toggle("header-darkmode")


  text.forEach(il => {
    console.log(il);
    il.classList.toggle("text-darkmode");
  });

  button.forEach(il => {
    console.log(il);
    il.classList.toggle("button-darkMode");
  });
  
})