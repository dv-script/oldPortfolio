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

// ========================================================================

const toTop = document.querySelector(".to-top__button");

window.addEventListener("scroll", function (el) {
  if (window.scrollY > 946) {
    toTop.classList.add("visible");
    toTop.classList.remove("invisible")
  } else {
    toTop.classList.remove("visible");
    toTop.classList.add("invisible");
  }
});