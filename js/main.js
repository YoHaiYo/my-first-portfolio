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

/// gsap 패키지, lodash 패키지
const toTopEl = document.querySelector('#to-top');

// _.throttle(함수, 시간) : 0.3초마다 실행되게 해주기. 이거 안하면 스크롤할때마다 수백번씩 실행됨.
window.addEventListener('scroll', _.throttle(function() {
  // console.log(window.scrollY);
  if (window.scrollY > 500) {
    // gsap.to(요소, 지속시간(s), 옵션);
    // 버튼 보이기
    gsap.to(toTopEl, .3, {
      x: 0
    });
  } else {
    // 버튼 숨기기
    gsap.to(toTopEl, .3, {
      x: 100
    });
  } 
}, 300));

/// ScrollToPlugin 패키지
// to-top 누르면 최상단으로 이동.
toTopEl.addEventListener('click', function () {
  gsap.to(window, .1, {
    scrollTo: 0
  });
});


// Copyright연도 자동지정
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); // 2023 (올해년도 출력)