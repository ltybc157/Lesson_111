window.addEventListener('DOMContentLoaded', function () {
  let more = document.querySelectorAll('.row > div > div >button'), //вызываем 2 кнопки 
    overlay = document.querySelector('.popup_calc'),
    popupCalcProfile = document.querySelector('.popup_calc_profile'),
    populCalcEnd = document.querySelector('.popup_calc_end'),
    populCalcBtnProfile = document.querySelector('.popup_calc_button'),
    populCalcBtnEnd = document.querySelector('.popup_calc_profile_button'),
    popupEngineer = document.querySelector('.popup_engineer'),
    РeaderBtn = document.querySelector('.header_btn');
    
 //-------------открытие 1 окна прописываем на 2 кнопки------------------------------
  more.forEach((item) => {
    item.addEventListener('click', function () {
      overlay.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    });
  });
 //-------------открытие 2,3 окна прописываем на 2 далее------------------------------
  function addModal(trigger, add) {
    trigger.addEventListener('click', function () {
      add.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    });
  }
  addModal(РeaderBtn, popupEngineer); // открытие header
  addModal(populCalcBtnProfile, popupCalcProfile); //открытие 2 окна
  addModal(populCalcBtnEnd, populCalcEnd); //открытие 3 окна
  //-------------закрытие 1,2,3  окно  прописываем на x и вне модального окна-----------
  function closeModal(trigger, selector, closeSelector) {
    trigger.addEventListener('click', (event) => {
      const target = event.target;
      if (target.classList.contains(closeSelector) ||
        target.parentNode.classList.contains(closeSelector) ||
        target.classList.contains(selector)) {
        trigger.style.display = 'none';
        document.body.style.overflow = '';
      }
    });
  }
  closeModal(popupEngineer, 'popup_engineer', 'popup_close'); //закрытие header
  closeModal(overlay, 'popup_calc', 'popup_calc_close'); //закрытие 1 окна
  closeModal(popupCalcProfile, 'popup_calc_profile', 'popup_calc_profile_close'); // закрытие 2 окна
  closeModal(populCalcEnd, 'popup_calc_end', 'popup_calc_end_close'); // закрытие 3 окна


  //----------------прописываем при наведении на иконки в модальном окне они увеличиваются----------------------
  const prewies = document.querySelectorAll('.balcon_icons > a > img'), //вызываеь все картинки маненькие из модального окна
    bigImg = document.querySelectorAll('.big_img > img'); //вызываем все картинки большие из модального окна 

  prewies.forEach((item, i) => { // перебираем массив с картинками маленькими
    item.addEventListener('click', (e) => {
      e.preventDefault(); //прописываем чтобы убрать обычное поведени ,чтобы картинка не прыгала когда на неё наводишь мышкой
      prewies.forEach(img => { //прописываем чтобы  класс убрать у всех картинок 
        img.classList.remove('do_image_more'); //  -//-
      })
      item.classList.add('do_image_more'); //прописываем чтобы  класс добавить который увеличит картинки при наведении 

      bigImg.forEach(img => { //прописываем чтобы скрыть картинки большие
        img.style.display = 'none';
      });
      bigImg[i].style.display = 'inline-block';


    });
  });

});