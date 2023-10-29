/// hamburger menu button 
 document.addEventListener("DOMContentLoaded", function() {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".ssh--nav-menu");
 
  hamburger.addEventListener("click",() => {
   hamburger.classList.toggle("active");
   navMenu.classList.toggle("active");
  })
 
  document.querySelectorAll(".nav-link").forEach(n => n.
   addEventListener("click", () => {
     hamburger.classList.remove("active");
     navMenu.classList.remove("active");
   })
  )
});


/// swiper 
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
