window.addEventListener('DOMContentLoaded', function () {

   
   let more = document.querySelector('.popup_calc_btn'),
   overlay = document.querySelector('.popup_calc'),
   close = document.querySelector('.popup_calc_close');

more.addEventListener('click', function () {
   overlay.style.display = 'block';
   this.classList.add('more-splash');
   document.body.style.overflow = 'hidden';
});

close.addEventListener('click', function () {
   overlay.style.display = 'none';
   more.classList.remove('more-splash');
   document.body.style.overflow = '';
});
//прописываем принаведении на иконки в модальном окне они увеличиваются

let type_1= document.querySelector('.type1_img'),
    type_2 = document.querySelector('.type2_img'),
    type_3 = document.querySelector('.type3_img'),
    type_4= document.querySelector('.type4_img'),
    type_1_big  = document.querySelector('#type1'),
    type_2_big  = document.querySelector('#type2'),
    type_3_big  = document.querySelector('#type3'),
    type_4_big  = document.querySelector('#type4');

    function Type(img, img_big, img_big_1) { 
 img.addEventListener('mouseover', function () {
   img.style.width = '105px';
   
   img_big_1.style.display = 'none';
   img_big.style.display = 'inline-block';

   });
   img.addEventListener('mouseout', function () {
      img.style.width = '100px';
      img_big_1.style.display = 'inline-block';
      img_big.style.display = 'none';
      
     
   });
 }
 Type(type_1, type_1_big, type_1_big);
 Type(type_2, type_2_big, type_2_big);
 Type(type_3, type_3_big, type_3_big);
 Type(type_4, type_4_big, type_4_big);














    
    console.log(type_1_big);

/* a.pixelLeft-=2;
06
                a.pixelTop-=2;
07
                a.pixelWidth+=4;
08
                a.pixelHeight+=4;
09
                a.zIndex+=1;
10
                setTimeout(fun,20);
*/










});