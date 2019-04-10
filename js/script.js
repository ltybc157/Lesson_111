window.addEventListener('DOMContentLoaded', function () {
  
   let more = document.querySelectorAll('.row > div > div >button'),
   overlay = document.querySelector('.popup_calc'),
   
   close = document.querySelector('.popup_calc_close');

   more.forEach((item) => {
item.addEventListener('click', function () {
   overlay.style.display = 'block';
   document.body.style.overflow = 'hidden';

   
});



 
   
   
 
});
//прописываем при наведении на иконки в модальном окне они увеличиваются
 

const prewies = document.querySelectorAll('.balcon_icons > a > img'), //вызываеь все картинки маненькие из модального окна
      bigImg =document.querySelectorAll('.big_img > img'); //вызываем все картинки большие из модального окна 

prewies.forEach((item, i) => { // перебираем массив с картинками маленькими
 item.addEventListener('click', (e) => {
  e.preventDefault(); //прописываем чтобы убрать обычное поведени ,чтобы картинка не прыгала когда на неё наводишь мышкой
  prewies.forEach(img => {//прописываем чтобы  класс убрать у всех картинок 
    img.classList.remove('do_image_more');//  -//-
  }) 
  item.classList.add('do_image_more'); //прописываем чтобы  класс добавить который увеличит картинки при наведении 
 
  bigImg.forEach(img => {//прописываем чтобы скрыть картинки большие
 img.style.display = 'none';
  });

bigImg[i].style.display = 'inline-block';


});
});

});