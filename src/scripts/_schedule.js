const schedule_btn = document.querySelector('[data-schedule-btn]');
const schedule_listElem = document.querySelectorAll('[data-schedule-list-elem-dynamic]');

function schedule_expandList() {
    schedule_listElem.forEach(elem => {
        elem.classList.remove('hide');
    })
    schedule_btn.classList.add('hide');
}

schedule_btn.addEventListener('click', schedule_expandList)