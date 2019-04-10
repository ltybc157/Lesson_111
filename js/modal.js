window.addEventListener('DOMContentLoaded', function () {
 let btn = document.querySelector('.popup_engineer_btn'),
 modal =document.querySelector('.popup_engineer'),
 close = document.querySelector('.popup_close');
 header = document.querySelector('.header');
 
 btn.addEventListener('click', function () {
    modal.style.display = 'flex';
    this.classList.add('more-splash');
   document.body.style.overflow = 'hidden';
 });

 close.addEventListener('click', function () {
    modal.style.display = 'none';
    header.style.display = 'none';
    btn.classList.remove('more-splash');
   document.body.style.overflow = '';
 });


 
 console.log(close);










});