window.addEventListener('DOMContentLoaded', function () {
    
 let btn = document.querySelector('.popup_engineer_btn'),
 modal =document.querySelector('.popup_engineer'),
 close = document.querySelectorAll('.popup_close')[1];
 header = document.querySelector('.header');
 
 btn.addEventListener('click', function () {
    modal.style.display = 'flex';
   document.body.style.overflow = 'hidden';
 });

 close.addEventListener('click', function () {
    modal.style.display = 'none';
   document.body.style.overflow = '';
 });
 


 
 console.log(close);










});