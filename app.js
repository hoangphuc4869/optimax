var swiper = new Swiper(".heading-swiper", {
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
});
var swiper = new Swiper(".footer-swiper", {
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
});

var hamburger = document.querySelector(".hamburger");
var menu9 = document.querySelector("#menu-mobile");
var menu = document.querySelector(".menu-mobile-wrap");
// var searchForm = document.querySelector(".search-form");
// var searchBtn = document.querySelector(".search-form");

if (hamburger) {
  document.addEventListener("click", (e) => {
    if (!menu9.contains(e.target) && e.target != hamburger) {
      menu.classList.remove("active");
      hamburger.classList.remove("active");
    }
  });
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    menu.classList.toggle("active");
  });
}
