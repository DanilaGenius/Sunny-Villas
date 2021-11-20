const tour_slider = document.querySelector('[data-tour-slider]');
const tour_sliderInner = tour_slider.querySelector('[data-tour-slider-inner]');
const tour_slides = tour_slider.querySelectorAll('[data-tour-slider-slide]');
let tour_widthSlide = +tour_slides[0].offsetWidth
const tour_numberSlides = +tour_slides.length;
let tour_slideIndex = 0;
let transitionForInner = 'all 1s'

const tour_btnPrev = document.querySelector('[data-tour-slide-prev]');
const tour_btnNext = document.querySelector('[data-tour-slide-next]');

// for click
tour_btnPrev.addEventListener('click', slidePrev)
tour_btnNext.addEventListener('click', slideNext)


function slidePrev(e) {
    e.preventDefault();
    tour_slideIndex--
    if (tour_slideIndex < 0) {
        tour_sliderInner.style.transition = 'none'
        tour_slideIndex = tour_numberSlides
        setTimeout(() => tour_sliderInner.style.transition = transitionForInner, 100)
    }
    tour_sliderInner.style.transform = `translate(${-tour_widthSlide * tour_slideIndex}px`
};

function slideNext(e) {
    e.preventDefault();
    tour_slideIndex++
    if (tour_slideIndex > tour_numberSlides) {
        tour_sliderInner.style.transition = 'none'
        tour_slideIndex = 0
        setTimeout(() => tour_sliderInner.style.transition = transitionForInner, 100)
    }
    tour_sliderInner.style.transform = `translate(${-tour_widthSlide * tour_slideIndex}px`
};

// for resize
window.addEventListener('resize', tour_resize)

function tour_resize(e) {
    tour_widthSlide = +tour_slides[0].offsetWidth
    tour_sliderInner.style.transform = `translate(${-tour_widthSlide * tour_slideIndex}px`
}

// for touch
