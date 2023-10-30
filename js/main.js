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


/// Modal
$(document).ready(function() {
  // 모달메뉴열기
  $(".modal-btn").click(function() { 
    $("body").addClass("dark-box");
    // 여기서 this는 ".modal-btn"
    // $(this).data('target') 자체가 .menu-1, .menu-2가 된다 !
    $($(this).data('target')).addClass("showdiv")
  })
  // 모달메뉴 닫기
  $(".close-btn").click(function() {  
    $("body").removeClass("dark-box");
    $(".modal-box").removeClass("showdiv");
  })
})