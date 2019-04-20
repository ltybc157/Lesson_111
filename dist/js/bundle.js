/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {



window.addEventListener('DOMContentLoaded', function() {
    'use strict';

let form = __webpack_require__(/*! ./parts/form.js */ "./src/js/parts/form.js"),
times = __webpack_require__(/*! ./parts/timer.js */ "./src/js/parts/timer.js"),
tabs = __webpack_require__(/*! ./parts/tabs.js */ "./src/js/parts/tabs.js"),
script = __webpack_require__(/*! ./parts/script.js */ "./src/js/parts/script.js"),
pictire = __webpack_require__(/*! ./parts/picture.js */ "./src/js/parts/picture.js");



form();
times();
tabs();
script();
pictire();

});

/***/ }),

/***/ "./src/js/parts/form.js":
/*!******************************!*\
  !*** ./src/js/parts/form.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {


function form()  {

     let widthWindow = document.querySelector('#width'),
     viewType = document.querySelector('#view_type'),
     warm = document.querySelectorAll('.checkbox'),
     cold = document.querySelectorAll('.checkbox'),
     heightWindow = document.querySelector('#height');
     
     let message = {
          loading: "Загрузка...",
          sucsess: "Спасибо! Скоро мы с Вами свяжемся!",
          failure: "Что-то пошло не так..."
     };

     let form = document.querySelectorAll('form'),
          statusMessage = document.createElement('div');


     statusMessage.classList.add('status');

     form.forEach((item) => {

          item.addEventListener('submit', function (event) {
               event.preventDefault();
               let input = item.querySelectorAll('input');
               item.appendChild(statusMessage);

               let request = new XMLHttpRequest();
               request.open('POST', 'server.php');
               request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
               let formData = new FormData(item);


               let obj = {
                    width :widthWindow.value,
                    height: heightWindow.value,
                    view: viewType.value,
                    Warm: warm[1].checked,
                    Cold: cold[0].checked
               };

               formData.forEach(function (value, key) {
                    obj[key] = value;
               });

               let json = JSON.stringify(obj);
               request.send(json);

               request.addEventListener('readystatechange', function () { //прописываем чтобы наблюдать за изменением запроса
                    if (request.readyState < 4) {
                         statusMessage.innerHTML = message.loading;
                    } else if (request.readyState === 4 && request.status == 200) {
                         statusMessage.innerHTML = message.sucsess;
                    } else {
                         statusMessage.innerHTML = message.failure;
                    }
               });
               for (let i = 0; i < input.length; i++) {
                    input[i].value = '';
               }

          });
     });



}
module.exports = form;

/***/ }),

/***/ "./src/js/parts/picture.js":
/*!*********************************!*\
  !*** ./src/js/parts/picture.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {


function pictire (){
const works = document.querySelectorAll('.works .row div');

works.forEach((work)=> {
  work.addEventListener('click', (event) => {
   event.preventDefault();
  
  const popupImage = document.createElement('div');
  const curentImage = document.createElement('img');
  const curentImageHref = work.querySelector('a').getAttribute('href');

  popupImage.classList.add('popup');
  curentImage.setAttribute('src', curentImageHref);
  popupImage.appendChild(curentImage);
  document.body.appendChild(popupImage);
  popupImage.style.display = 'flex';
  popupImage.style.alignItems = 'center';
  popupImage.style.justifyContent = 'center';

  popupImage.addEventListener('click', (event) => {
     if (event.target.classList.contains('popup')) {
       popupImage.style.displey = 'none';
       document.body.removeChild(popupImage);

     }

  })
  });
});

}
module.exports = pictire;






/***/ }),

/***/ "./src/js/parts/script.js":
/*!********************************!*\
  !*** ./src/js/parts/script.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function script () {


window.addEventListener('DOMContentLoaded', function () {
  let more = document.querySelectorAll('.row > div > div >button'), //вызываем 2 кнопки 
    overlay = document.querySelector('.popup_calc'),
    popupCalcProfile = document.querySelector('.popup_calc_profile'),
    populCalcEnd = document.querySelector('.popup_calc_end'),
    populCalcBtnProfile = document.querySelector('.popup_calc_button'),
    populCalcBtnEnd = document.querySelector('.popup_calc_profile_button'),
    popupEngineer = document.querySelector('.popup_engineer'),
    phoneLink= document.querySelectorAll('.phone_link'),
    
    РeaderBtn = document.querySelector('.header_btn');
    
     let tiMes = setInterval(freme, 60000)
     function freme() {
      
      popupEngineer.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    
     }
 //-------------открытие 1 окна прописываем на 2 кнопки------------------------------

 
 function AddModal(a, b) {
   a.forEach((item) => {
    item.addEventListener('click', function () {
      b.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    });
  });
 } 
 AddModal(more, overlay);
 AddModal(phoneLink,  popupEngineer);
 
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
  closeModal(populCalcEnd, 'popup_engineer', 'popup_close'); // закрытие 3 окна
});
}

module.exports = script;

/***/ }),

/***/ "./src/js/parts/tabs.js":
/*!******************************!*\
  !*** ./src/js/parts/tabs.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function tabs() {
  const prewies = document.querySelectorAll('.balcon_icons > a > img'), //вызываеь все картинки маненькие из модального окна
  bigImg = document.querySelectorAll('.big_img > img'), //вызываем все картинки большие из модального окна 
  tab = document.querySelectorAll('.glazing_slider > div'),
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
    b[i].style.display = 'block';


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

/***/ }),

/***/ "./src/js/parts/timer.js":
/*!*******************************!*\
  !*** ./src/js/parts/timer.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {


function times(){


  let deadline = '2019-4-21';

  function getTimeRemaining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date()),
        seconds = Math.floor(t / 1000 % 60),
        minutes = Math.floor(t / 1000 / 60 % 60),
        hours = Math.floor((t / (1000 *60*60))),
        days = Math.floor((t / (1000 *60*60*24)));
    return {
      'total': t,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds,
      'days': days
    };
  }

  function setClock(id, endtime) {
    let timer = document.querySelector(id),
        hours = timer.querySelector('#hours'),
        minutes = timer.querySelector('#minutes'),
        seconds = timer.querySelector('#seconds'),
        days = timer.querySelector('#days'),
        timeInterval = setInterval(updateClock, 1000);
       
  
    function updateClock() {
      let t = getTimeRemaining(endtime);

      function addZero(num) {
        if (num <= 9) {
          return '0' + num;
        } else {
          return num;
        }
      }

      hours.textContent = addZero(t.hours);
      minutes.textContent = addZero(t.minutes);
      seconds.textContent = addZero(t.seconds);
      days.textContent = addZero(t.days);

      if (t.total <= 0) {
        clearInterval(timeInterval);
        hours.textContent = '00';
        minutes.textContent = '00';
        seconds.textContent = '00';
      }
    }
  }

  setClock('#timer', deadline);
}

module.exports = times;

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map