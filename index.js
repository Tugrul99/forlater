


// NAVBAR

(() => {
  'use strict'

  document.querySelector('#navbarSideCollapse').addEventListener('click', () => {
    document.querySelector('.offcanvas-collapse').classList.toggle('open')
  })
})()

// Animation on sections

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show');

    } else {
      entry.target.classList.remove('show');
    }

  });
});

const hiddenElements = document.querySelectorAll('.hidden');

hiddenElements.forEach((el) => observer.observe(el));



const secondhiddenElements = document.querySelectorAll('.lhidden');

secondhiddenElements.forEach((el) => observer.observe(el));

