window.addEventListener('DOMContentLoaded', function () {

const popupModal = document.querySelector('.popup_calc_content');

function closeModal(trigger, selector ) {
    trigger.addEventListener('click', (event) => {
        const target = event.target;
        if (target.classList.contains(selector)) {
                trigger.style.display = 'none';
            }
    })
}
console.log(popupModal);
closeModal(popupModal, 'popup_calc_content');
}); 