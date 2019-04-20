function tabs() {
  'use strict';
  const prewies = document.querySelectorAll('.balcon_icons > a > img'), //вызываеь все картинки маненькие из модального окна
  bigImg = document.querySelectorAll('.big_img > img'), //вызываем все картинки большие из модального окна 
  tab = document.querySelectorAll('.glazing_block'),
  tabContent = document.querySelectorAll('.container > div.tree, div.aluminum,  div.plastic, div.french, div.rise'),
  DecorationContent  = document.querySelectorAll('.decoration_content > div > div.internal, div.external, div.rising, div.roof'),
  DecorationItem = document.querySelectorAll('.decoration_item'),
  DecorationItemDiv = document.querySelectorAll('.decoration_item > div');

  function tabs(a, b) {
  a.forEach((item, i) => { // перебираем массив с картинками маленькими
  item.addEventListener('click', (e) => {
    e.preventDefault(); //прописываем чтобы убрать обычное поведени ,чтобы картинка не прыгала когда на неё наводишь мышкой
  
    a.forEach(img => { //прописываем чтобы  класс убрать у всех картинок 
      img.classList.remove('do_image_more'); //  -//-
    })
   
    item.classList.add('do_image_more'); //прописываем чтобы  класс добавить который увеличит картинки при наведении 

    b.forEach(img => { //прописываем чтобы скрыть картинки большие
      img.style.display = 'none';
    });
    b[i].style.display = 'inline-block';


  });
});
 }

 tabs(tab, tabContent);
 tabs(prewies, bigImg );
tabs(DecorationItem, DecorationContent );

 //---------------------------------------------------------------------------------------------------------------------
 DecorationItemDiv.forEach((item) => { 
  item.addEventListener('click', (e) => {
  e.preventDefault(); 
  DecorationItemDiv.forEach(div => { 
    div.classList.remove('after_click'); 
    
  })
  item.classList.add('after_click'); 
})
})
 
}
module.exports = tabs;
