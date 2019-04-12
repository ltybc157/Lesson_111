window.addEventListener('DOMContentLoaded', function () {

//Form

let message = {
    loading: "Загрузка...",
    sucsess: "Спасибо! Скоро мы с Вами свяжемся!",
    failure: "Что-то пошло не так..."
};

let form = document.querySelectorAll('.popup_dialog');
    //formDown = document.querySelector('#form'),
    //input = querySelectorAll('.popup_calc > div > div > input');

     form.forEach((item) => {
        item.addEventListener('submit', function (event) {
        event.preventDefault();
        
        let request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        request.setRequestHeader ('Content-type', 'application/x-www-form-urlencoded');
        
        let formData = new FormData(form);
         request.send(formData);


    });
     });

});