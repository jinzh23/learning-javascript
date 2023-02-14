//Changing page colour:
function changeColour() {
    if (document.body.style.background === "#CFB997") {
    document.body.style.background = "white";
    } else {
    document.body.style.background = "#CFB997";
    }
    }

//Toggle bar menu:
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

//Using getElementById
const helloWorldHead = document.getElementById('helloWorldHeader');
helloWorldHead.style.fontSize = '10px';
helloWorldHead.textContent = "Look! My text content has changed.";


//Photo slideshow:
const swiper = new Swiper(".swiper", {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
