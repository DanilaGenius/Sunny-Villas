const contacts_btnForSending = document.querySelector('[data-contacts-form-btn]');
const contacts_inputOfForm = document.querySelector('[data-contacts-form-input-tel]');
const contacts_answer = document.querySelector('[data-contacts-hide-content]');

function replyAfterSendingMessage(e) {
    e.preventDefault()
    contacts_btnForSending.classList.add('hide');
    contacts_inputOfForm.classList.add('hide');
    contacts_answer.classList.remove('hide');
}

contacts_btnForSending.addEventListener('click', replyAfterSendingMessage)