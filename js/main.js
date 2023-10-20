/* document.addEventListener("DOMContentLoaded", function() {
  const menuToggleBtn = document.querySelector(".menu-toggle-btn");
  const gnb = document.querySelector(".header-menu");

  menuToggleBtn.addEventListener("click", function() {
    if (gnb.style.display === "block" || gnb.style.display === "") {
      gnb.style.display = "none";
    } else {
      gnb.style.display = "block";
    }
  });
}); */


/* document.addEventListener("DOMContentLoaded", function() {
  // DOM이 로드된 후에 이 코드가 실행됩니다.
  const toggleButton = document.querySelector('.menu-toggle-btn');
  const headerMenu = document.querySelector('.header-menu');

  toggleButton.addEventListener('click', function() {
    const currentDisplay = window.getComputedStyle(headerMenu).display;
    if (currentDisplay === 'none' || currentDisplay === '') {
      headerMenu.style.display = 'block';
    } else {
      headerMenu.style.display = 'none';
    }
  });
}); */

document.addEventListener("DOMContentLoaded", function() {
  let menuIsVisible = false;
  const toggleButton = document.querySelector('.menu-toggle-btn');
  const menu = document.querySelector('.header-menu');

  toggleButton.addEventListener('click', function() {
    // 불리언 변수를 토글합니다.
    menuIsVisible = !menuIsVisible;
  
    // 불리언 변수의 상태에 따라 메뉴의 display 속성을 설정합니다.
    if (menuIsVisible) {
      menu.style.display = 'block';
    } else {
      menu.style.display = 'none';
    }
  });
});
