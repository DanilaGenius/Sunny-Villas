const menu__call = document.querySelector('.menu__call')
const menu__burger = document.querySelector('.menu__burger')
const header__aside = document.querySelector('.header__aside')

menu__call.addEventListener('click', (e) => {
    menu__burger.classList.toggle('menu__burger-open')
    menu__burger.classList.toggle('menu__burger-close')

    if (menu__burger.classList[1] == 'menu__burger-open') {
        header__aside.style.transform = 'translateX(100%)'
        header__aside.style.opacity = '0'
        return
    }
    if (menu__burger.classList[1] == 'menu__burger-close') {
        header__aside.style.transform = 'translateX(0)'
        header__aside.style.opacity = '1'
        return
    }

    
    
    
})


