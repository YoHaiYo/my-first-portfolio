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


/// PopUp Templet
(function makePopUp() {
  const newList = [];
  let templet = "";
    newList.push(`
    <div class="popup position-fixed z-3 bg-white border border-black">
      <p>팝업내용 1</p>
      <button class="popup-close bg-transparent border-0">X</button>
    </div>
  `)
  templet = newList.join('');
  document.querySelector(`.popup-insect.popup-num-1`).innerHTML = templet;
})();

/// PopUp
 document.querySelector(`.popup .popup-close`).addEventListener('click',
 function(){
   document.body.classList = ""
 }
)

 document.querySelector(".popup-open.popup-num-1").addEventListener('click',
 function(){
   document.body.classList += "popup-active"
 }
)