/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

  // Navbar shrink function
  var headerBgChange = function () {
      const navbarCollapsible = document.body.querySelector('#hd');
      if (!navbarCollapsible) {
          return;
      }
      if (window.scrollY === 0) {
          navbarCollapsible.classList.remove('bg-change')
      } else {
          navbarCollapsible.classList.add('bg-change')
      }

  };

  // Shrink the navbar 
  headerBgChange();

  // Shrink the navbar when page is scrolled
  document.addEventListener('scroll', headerBgChange);




});