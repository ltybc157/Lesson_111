"use strict";

  var persons = document.querySelectorAll('.counter-block-input')[0],
      restDays = document.querySelectorAll('.counter-block-input')[1],
      place = document.getElementById('select'),
      totalValue = document.getElementById('total'),
      //вызываем  где общая сумма
  personsSum = 0,
      daysSum = 0,
      total = 0;
  totalValue.innerHTML = 0; // выводит 0 в общая сумма

  persons.addEventListener('keyup', function () {
    //вешаем обработчик событий на графу где водим количество людей
    this.value = this.value.replace(/^0-9/, "1");
    personsSum = +this.value; // берёт переменную каторую водил пользователь 

    total = (daysSum + personsSum) * 4000;

    if (restDays.value == '' || persons.value == '') {
      //пишем условие что второе поле пустое
      totalValue.innerHTML = 0;
    } else {
      totalValue.innerHTML = total;
    }
  });
  restDays.addEventListener('change', function () {
    //вешаем обработчик событий на графу где водим количество людей
    daysSum = +this.value; // берёт переменную каторую водил пользователь 

    total = (daysSum + personsSum) * 4000;

    if (restDays.value == '' || persons.value == '') {
      //пишем условие что второе поле пустое
      totalValue.innerHTML = 0;
    } else {
      totalValue.innerHTML = total;
    }
  });
  place.addEventListener('change', function () {
    if (restDays.value == '' || persons.value == '') {
      totalValue.innerHTML = 0;
    } else {
      var a = total;
      totalValue.innerHTML = a * this.options[this.selectedIndex].value;
    }
  });

