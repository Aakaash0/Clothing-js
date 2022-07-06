/* Author: 

*/


// Hamburger menu
var hamburger = document.querySelector('.hamburger')
var nav = document.querySelector('nav')

hamburger.addEventListener('click', function () {
  nav.classList.toggle('show')
  hamburger.classList.toggle('show')
})

// banner slider
var prevBtn = document.querySelector('.arrow-left');
var nextBtn = document.querySelector('.arrow-right');
var slides = document.querySelectorAll('.slide');
var dots = document.querySelectorAll('.dot');

var counter = 0;

dots.forEach((dot, i) => {
  dot.addEventListener('click', e => {
    e.preventDefault();
    slides.forEach(e => e.classList.remove('show'));
    slides[i].classList.add('show');
    counter = i
  })
})

nextBtn.addEventListener('click', e => {
  e.preventDefault();
  counter += 1;
  slides.forEach(e => e.classList.remove('show'));
  if (counter > 2) {
    counter = 0;
    slides[counter].classList.add('show');
  } else { slides[counter].classList.add('show'); }
})
prevBtn.addEventListener('click', e => {
  e.preventDefault();
  counter -= 1;
  slides.forEach(e => e.classList.remove('show'));
  if (counter < 0) {
    counter = 2;
    slides[counter].classList.add('show');
  } else { slides[counter].classList.add('show'); }
})

// Read More

var readMore = document.querySelectorAll('.read-more')
var elemExtra = document.querySelectorAll('.extra')
var array_tabs = Array.from(readMore);
array_tabs.forEach(function (read, index) {
  read.addEventListener('click', function () {
    var hiddenElements = this.previousElementSibling.querySelectorAll('.extra');
    hiddenElements.forEach(function (value) {
      value.classList.toggle('show');
    })
    if (this.innerText == 'Read more') {
      this.innerText = 'Read Less';
    } else {
      this.innerText = 'Read more';
    }
  })
});
function removeActiveClasses() {
  array_tabs.forEach(function (read, index) {
    elemExtra[index].classList.remove('show')
    readMore.innerHTML = "Read more"
  })
}
