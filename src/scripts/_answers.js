const btnSwith = document.querySelectorAll('[data-accordion-btn-switch]');

btnSwith.forEach(elem => {
    elem.addEventListener('click', switchContentElem);
})

function switchContentElem(e) {
    

    const target = e.currentTarget;
    const id = target.getAttribute('data-accordion-btn-switch');
    const content = document.querySelector(`[data-accordion-content-elem="${id}"]`);
    const header = target.parentNode;
    
    
    // close
    if (target.classList.contains('accordion__close')) {
        target.classList.remove('accordion__close');
        content.style = 'height: 0%; display: none;';
        header.style.background = '';
        return
    }
    
    //open
    closeAllContent()
    target.classList.add('accordion__close');
    content.style = 'height: 100%; display: block;';
    header.style.background = 'rgba(255, 255, 255, 0.2)';
}

function closeAllContent() {
    const allContent = document.querySelectorAll('[data-accordion-content-elem]');
    const btnSwith = document.querySelectorAll('[data-accordion-btn-switch]');
    const allHeader = document.querySelectorAll('[data-accordion-header]');

    allContent.forEach(elem => {
        elem.style = 'height: 0%; display: none;';
    });

    btnSwith.forEach(elem => {
        elem.classList.remove('accordion__close');
    });

    allHeader.forEach(elem => {
        elem.style.background = '';
    });
}
