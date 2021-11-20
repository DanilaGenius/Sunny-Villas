const arrDataOfSlides = [
    {index: '1', src: '../images/our-offices-image-1-356.png', city: 'INDONESIA, BALI', address: 'Gg. Anggrek 7, Tibubeneng, Kec. Kuta Utara'},
    {index: '2', src: '../images/our-offices-image-2-356.png', city: 'FRANCE, Nice', address: '8 av jean medecin, sg nice espace pro, 1500'},
    {index: '3', src: '../images/our-offices-image-3-356.png', city: 'China, Guangzhou', address: 'Xiwan Road 149, Yuexiu Fortune Apartment  Building B2, 807'},
    {index: '4', src: '../images/our-offices-image-4-356.png', city: 'KIEV, UKRAINE', address: "Klovs'kyi descent 7a, Carnegie Tower, 15 floor, 68"},
    {index: '5', src: '../images/our-offices-image-5-356.png', city: 'BUCHAREST, ROMANIA', address: 'Strada Doctor Constantin Caracaș 24a'},
    {index: '6', src: '../images/our-offices-image-6-356.png', city: 'Chișinău, Moldova, ROMANIA', address: 'Strada Uzinelor 8, Building 1'},
];
let arrSliderImgs = [];
const slider = document.querySelector('[data-slider]');
const sliderInner = slider.querySelector('[data-slider-inner]');
let posX1 = 0;
let posX2 = 0;
let posFinal = 0;
let autoMoveSliderInterval;
let pressed = false;
const trfRegExp = /[-0-9.]+(?=px)/;
// if (document.documentElement.clientWidth > 700) {
    initSlader();
// }
let sliderImages;
let widthSliderImage;
let widthPackSliderImages;
let ratioWindow;

function createSlideForInner({index, src, city, address}) {
    return `<li class="meet__gallery-elem" id=${index} data-slider-img><img src=${src} alt="alt" class="meet__gallery-img"><div class="meet__gallery-content"><h2 class="meet__gallery-title">${city}</h2><p class="meet__gallery-text">${address}</p></div></li>`;
}
function addSlideInInner(direction = 'push') {
    const addition = [];
    
    if (direction == 'push') {
        arrDataOfSlides.forEach(elem => {
            addition.push(createSlideForInner(elem));
        });

        sliderInner.innerHTML = [...arrSliderImgs, ...addition].join(' ');
        arrSliderImgs = [...arrSliderImgs, ...addition];
    }
    if (direction == 'unshift') {
    }
}
function autoMoveSliderStart(timeInterval = 50, speedInPixels = 2) {
    autoMoveSliderInterval = setInterval(()=> {
        let numberOfPixels = getTranslateXOfElem(sliderInner);
        numberOfPixels -= speedInPixels;
        sliderInner.style.left = `${numberOfPixels + 'px'}`;

        checkOnBorderSliderInner()
    }, timeInterval);
} 
function autoMoveSliderStop() {
    clearInterval(autoMoveSliderInterval)
}
function getTranslateXOfElem(elem) {
    return (+elem.style.left.match(trfRegExp));
}
function initSlader() {
    addSlideInInner('push');
    sliderImages = slider.querySelectorAll('[data-slider-img]');
    widthSliderImage = sliderImages[0].clientWidth;
    widthPackSliderImages = sliderInner.clientWidth
    ratioWindow = Math.ceil(slider.clientWidth/widthPackSliderImages);   
    
    autoMoveSliderStart(50, ratioWindow);
 
    for(let i = 0; i < ratioWindow + 1; i++) { addSlideInInner('push');}
}

slider.addEventListener('mousedown', swipeStart);
slider.addEventListener('mousemove', swipeAction);
slider.addEventListener('mouseup', swipeEnd);
slider.addEventListener('mouseout', swipeOut)

function swipeStart(e) {
    slider.style.cursor = 'grab'
    e.preventDefault();
    pressed = true;
    posX1 = e.offsetX - sliderInner.offsetLeft;
    autoMoveSliderStop();
}

function swipeAction(e) {
    if (!pressed) {return};
    slider.style.cursor = 'grabbing'
    e.preventDefault();
    posX2 = e.offsetX;
    posFinal = posX2 - posX1;

    checkOnBorderSliderInner()

    sliderInner.style.left = `${posFinal + 'px'}`; 
}

function swipeEnd(e) {
    slider.style.cursor = 'grab'
    e.preventDefault();
    pressed = false;
    autoMoveSliderStart(50, ratioWindow);
}

function  swipeOut(e) {
    pressed = false;
}

function pushSliderInnerIn(direction = 'left') {
    const defineSliderInner = getDefineSliderInnerInNumber(sliderInner);
    let newDefineSliderInner;

    if (direction === 'left') newDefineSliderInner = defineSliderInner - widthPackSliderImages;
    if (direction === 'right') newDefineSliderInner = defineSliderInner + widthPackSliderImages;

    sliderInner.style.left = `${newDefineSliderInner + 'px'}`;
}

function getDefineSliderInnerInNumber(div = sliderInner) {
    return parseInt(div.style.left)
}

function checkOnBorderSliderInner() {
    if (sliderInner.offsetLeft >= -(slider.clientWidth * 0.3)) {
        pushSliderInnerIn('left');
        return
    }
    if (sliderInner.clientWidth + sliderInner.offsetLeft <= slider.clientWidth + (slider.clientWidth * 0.3)) {
        pushSliderInnerIn('right');
        return
    }
}
