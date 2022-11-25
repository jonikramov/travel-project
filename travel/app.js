console.log("Alert");

/* Slider desktop version */
const slider = document.querySelector('.slider');
const sliderOne = document.querySelector('.slider-one');
const sliderTwo = document.querySelector('.slider-two');
const sliderThree = document.querySelector('.slider-three');


const salom1 = () => {
    alert("salom1")
}

const salom2 = () => {
    alert("salom2")
}

const salom3 = () => {
    alert("salom3")
}



// sliderOne.addEventListener('click', salom1);
// sliderTwo.addEventListener('click', salom2);
// sliderThree.addEventListener('click', salom3);



sliderOne.addEventListener("click", () =>{
    slider.classList.add('slider-left');
    slider.classList.remove('slider-center');


})

sliderTwo.addEventListener("click", () =>{
    slider.classList.add('slider-center');
    slider.classList.remove('slider-left');
    slider.classList.remove('slider-right');


})

sliderThree.addEventListener("click", () =>{
    slider.classList.add('slider-right');
    slider.classList.remove('slider-center');


})



























































