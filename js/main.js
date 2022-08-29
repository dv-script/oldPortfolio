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
    console.log(el);
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