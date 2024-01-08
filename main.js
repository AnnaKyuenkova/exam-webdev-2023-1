'use strict'

/*функция для получения списка маршрутов*/
function getRoutes() {
    let xhr = new XMLHttpRequest();
    let url = "http://exam-2023-1-api.std-900.ist.mospolytech.ru/api/routes?api_key=d91bd560-fd75-49d6-801c-af4c9c5c8a34";
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let routes = JSON.parse(xhr.responseText);
            let table = document.getElementById("routes");
            for (let i = 0; i < routes.length; i++) {
                let route = routes[i];
                let row = table.insertRow(i + 1);
                let nameCell = row.insertCell(0);
                let descriptionCell = row.insertCell(1);
                let mainObjectCell = row.insertCell(2);
                let selectCell = row.insertCell(3);
                nameCell.innerHTML = route.name;
                descriptionCell.innerHTML = route.description;
                mainObjectCell.innerHTML = route.mainObject;

                let selectButton = document.createElement('button');
                selectButton.innerHTML = 'Выбрать';
                selectButton.className = 'btn btnColor';
                selectButton.id = 'btnRoute' + route.id;
                selectCell.appendChild(selectButton);
            }
        }
    };

    xhr.send();
}

window.onload = function () {
    getRoutes();
}

// функция для отображения уведомлений (не по тз, но хоть что-то)
function createAlert() {
    let alert = document.createElement('div');
    alert.innerHTML = 'Вы нажали на кнопку!';
    let messBox = document.querySelector(".alerts");
    alert.className = `alert alert-primary`;
    // добавление уведомления на страницу
    messBox.appendChild(alert);
    // удаление уведомления через 1 секунду
    setTimeout(function() {
        messBox.removeChild(alert);
    }, 1000);
  }
  
  // все кнопки на странице
  let buttons = document.getElementsByTagName('button');
  
  // обработчик события на каждую кнопку
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', createAlert);
  }

