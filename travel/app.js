console.log("Work");

/* Slider desktop version */
const slider = document.querySelector('.slider');

const sliderOne = document.querySelector('.slider-one');
const sliderTwo = document.querySelector('.slider-two');
const sliderThree = document.querySelector('.slider-three');

const sliderButtonOne = document.querySelector('.slider-button-one');
const sliderButtonTwo = document.querySelector('.slider-button-two');
const sliderButtonThree = document.querySelector('.slider-button-three');


sliderOne.addEventListener("click", () =>{
    slider.classList.add('slider-left');
    slider.classList.remove('slider-center');

    sliderButtonOne.classList.add('slider-button-active');
    sliderButtonTwo.classList.remove('slider-button-active');
    sliderButtonThree.classList.remove('slider-button-active');

})

sliderTwo.addEventListener("click", () =>{
    slider.classList.add('slider-center');
    slider.classList.remove('slider-left');
    slider.classList.remove('slider-right');

    sliderButtonOne.classList.remove('slider-button-active');
    sliderButtonTwo.classList.add('slider-button-active');
    sliderButtonThree.classList.remove('slider-button-active');

})

sliderThree.addEventListener("click", () =>{
    slider.classList.add('slider-right');
    slider.classList.remove('slider-center');

    sliderButtonOne.classList.remove('slider-button-active');
    sliderButtonTwo.classList.remove('slider-button-active');
    sliderButtonThree.classList.add('slider-button-active');

})

/* Slider mobile version */

"use strict";
// Select all slides
const slides = document.querySelectorAll(".slider-mobile__item");

const point = document.querySelector('.slider-mobile-button');
const point1 = document.querySelector('.point1');
const point2 = document.querySelector('.point2');
const point3 = document.querySelector('.point3');

// loop through slides and set each slides translateX
slides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 100}%)`;
});

// select next slide button
const nextSlide = document.querySelector(".slider-mobile-arrow-right");

// current slide counter
let curSlide = 0;
// maximum number of slides
let maxSlide = slides.length - 1;



// add event listener and navigation functionality
nextSlide.addEventListener("click", function () {

  // check if current slide is the last and reset current slide
  if (curSlide === maxSlide) {
    curSlide = 0;

  } else {
    curSlide++;
  }

  //   move slide by -100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });

  if(point.id === 'point-1') {
    point1.classList.remove('slider-mobile-button-active')
    point.id = 'point-2'
    point2.classList.add('slider-mobile-button-active')
  } else if(point.id === 'point-2') {
    point2.classList.remove('slider-mobile-button-active')
    point.id = 'point-3'
    point3.classList.add('slider-mobile-button-active')
  } else if(point.id === 'point-3') {
    point3.classList.remove('slider-mobile-button-active')
    point.id = 'point-1'
    point1.classList.add('slider-mobile-button-active')
  }

});

// select next slide button
const prevSlide = document.querySelector(".slider-mobile-arrow-left");

// add event listener and navigation functionality
prevSlide.addEventListener("click", function () {
  // check if current slide is the first and reset current slide to last
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }

  //   move slide by 100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });

  if(point.id === 'point-1') {
    point1.classList.remove('slider-mobile-button-active')
    point.id = 'point-3'
    point3.classList.add('slider-mobile-button-active')
  } else if(point.id === 'point-3') {
    point3.classList.remove('slider-mobile-button-active')
    point.id = 'point-2'
    point2.classList.add('slider-mobile-button-active')
  } else if(point.id === 'point-2') {
    point2.classList.remove('slider-mobile-button-active')
    point.id = 'point-1'
    point1.classList.add('slider-mobile-button-active')
  }
});


/* Burger menu */
const burgerIcon = document.querySelector('.hamburger');
const menuBurger = document.querySelector('.hamburger__menu');
const burgerCloseIcon = document.querySelector('.hamburger__close');
const overlay = document.querySelector('.overlay');

burgerIcon.addEventListener('click', () => {
  menuBurger.classList.toggle('hamburger__menu-active');
  overlay.classList.toggle('overlay-active');
})

overlay.addEventListener('click', () => {
  menuBurger.classList.toggle('hamburger__menu-active');
  overlay.classList.toggle('overlay-active');
  loginPopUp.classList.toggle('login-popup-active');
})

burgerCloseIcon.addEventListener('click', () => {
  menuBurger.classList.toggle('hamburger__menu-active');
  overlay.classList.toggle('overlay-active');
})

const account = document.querySelector('.account')
const loginBtn = document.querySelector('.button_header')
const loginPopUp = document.querySelector('.login-popup')

loginBtn.addEventListener('click', () => {
  loginPopUp.classList.toggle('login-popup-active');
  overlay.classList.toggle('overlay-active');
})

























