const lookAt__btn = document.querySelector('[data-lookat-btn]');
const lookAt__hideLinks = document.querySelector('[data-lookat-hide-links]');

function lookAt__expandLinks() {
    lookAt__hideLinks.classList.remove('hide')
    lookAt__btn.classList.add('hide')
}
lookAt__btn.addEventListener('click', lookAt__expandLinks)