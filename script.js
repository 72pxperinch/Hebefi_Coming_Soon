// script.js

window.onload = function () {
  const menu_btn = document.querySelector(".hamburger");

  const menu = document.querySelector(".menu");
  const navLink = document.querySelector(".nav-link");
  menu_btn.addEventListener("click", function () {
    menu_btn.classList.toggle("is-active");
    menu.classList.toggle("menu-down");
  });
  navLink.addEventListener("click", function () {
    menu_btn.classList.toggle("is-active");
    menu.classList.toggle("menu-down");
  });
};



// document.addEventListener("DOMContentLoaded", function () {
//     const sections = document.querySelectorAll('section');
//     let scrollTimer;

//     // Scroll to the nearest section on wheel event
//     document.addEventListener('wheel', function (e) {
//         e.preventDefault();
//         const deltaY = e.deltaY;
//         const currentScrollTop = document.documentElement.scrollTop;

//         // Clear the previous scroll timer
//         clearTimeout(scrollTimer);

//         sections.forEach((section) => {
//             const rect = section.getBoundingClientRect();
//             const isInViewport = rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
//             console.log("Sect:  " + section.innerText)
//             console.log("rectop:  " + rect.top)
//             console.log("recheight:  " + rect.height)
//             console.log("recbottom:  " + rect.bottom)
//             console.log("scrolltop:  " + currentScrollTop)
//             console.log("deltay:  " + deltaY)
//             console.log("innerheigh:  " + window.innerHeight)
//             console.log(isInViewport)

//             if (isInViewport) {
//                 // Set a delay before triggering the smooth scroll (e.g., 500 milliseconds)
//                 scrollTimer = setTimeout(() => {
//                     if (deltaY > 0 && rect.bottom > window.innerHeight / 2) {
//                         // Scroll down if the next section is within the viewport
//                         const nextSection = section.nextElementSibling;
//                         if (nextSection) {
//                             window.scroll({ top: currentScrollTop + rect.bottom, behavior: 'smooth' });
//                         }
//                     } else if (deltaY < 0 && rect.top < window.innerHeight / 2) {
//                         // Scroll up if the previous section is within the viewport
//                         const prevSection = section.previousElementSibling;
//                         if (prevSection) {
//                             window.scroll({ top: currentScrollTop - window.innerHeight + rect.top, behavior: 'smooth' });
//                         }
//                     } else if (deltaY < 0 && rect.top >= window.innerHeight / 2) {
//                         // Scroll up if the current section is at the top
//                         const prevSection = section.previousElementSibling;
//                         if (prevSection) {
//                             window.scroll({ top: currentScrollTop - window.innerHeight + rect.top, behavior: 'smooth' });
//                         }
//                     }
//                 }, 100); // Adjust the delay as needed
//             }
//         });
//     });
// });
