function form() {
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
  form.forEach(item => {
    item.addEventListener('submit', function (event) {
      event.preventDefault();
      let input = item.querySelectorAll('input');
      item.appendChild(statusMessage);
      let request = new XMLHttpRequest();
      request.open('POST', 'server.php');
      request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
      let formData = new FormData(item);
      let obj = {
        width: widthWindow.value,
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
      request.addEventListener('readystatechange', function () {
        //прописываем чтобы наблюдать за изменением запроса
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