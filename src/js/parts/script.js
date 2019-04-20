function script() {
  'use strict';

  let more = document.querySelectorAll('.row > div > div > button'),
      //вызываем 2 кнопки 
  overlay = document.querySelector('.popup_calc'),
      popupCalcProfile = document.querySelector('.popup_calc_profile'),
      populCalcEnd = document.querySelector('.popup_calc_end'),
      populCalcBtnProfile = document.querySelector('.popup_calc_button'),
      populCalcBtnEnd = document.querySelector('.popup_calc_profile_button'),
      popupEngineer = document.querySelector('.popup_engineer'),
      phoneLink = document.querySelectorAll('.phone_link'),
      РeaderBtn = document.querySelector('.header_btn');
  let tiMes = setInterval(freme, 60000);

  function freme() {
    popupEngineer.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  } //-------------открытие 1 окна прописываем на 2 кнопки------------------------------


  function addModal(a, b) {
    a.forEach(item => {
      item.addEventListener('click', function (event) {
        event.preventDefault();
        b.style.display = 'flex';
        document.body.style.overflow = 'hidden';
      });
    });
  }

  addModal(more, overlay);
  addModal(phoneLink, popupEngineer); //-------------открытие 2,3 окна прописываем на 2 далее------------------------------

  function addModalNow(trigger, add) {
    trigger.addEventListener('click', function (event) {
      event.preventDefault();
      add.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    });
  }

  addModalNow(РeaderBtn, popupEngineer); // открытие header

  addModalNow(populCalcBtnProfile, popupCalcProfile); //открытие 2 окна

  addModalNow(populCalcBtnEnd, populCalcEnd); //открытие 3 окна
  //-------------закрытие 1,2,3  окно  прописываем на x и вне модального окна-----------

  function closeModal(trigger, selector, closeSelector) {
    trigger.addEventListener('click', event => {
      const target = event.target;

      if (target.classList.contains(closeSelector) || target.parentNode.classList.contains(closeSelector) || target.classList.contains(selector)) {
        trigger.style.display = 'none';
        document.body.style.overflow = '';
      }
    });
  }

  closeModal(popupEngineer, 'popup_engineer', 'popup_close'); //закрытие header

  closeModal(overlay, 'popup_calc', 'popup_calc_close'); //закрытие 1 окна

  closeModal(popupCalcProfile, 'popup_calc_profile', 'popup_calc_profile_close'); // закрытие 2 окна

  closeModal(populCalcEnd, 'popup_calc_end', 'popup_calc_end_close'); // закрытие 3 окна

  closeModal(populCalcEnd, 'popup_engineer', 'popup_close'); // закрытие 3 окна
}

module.exports = script;