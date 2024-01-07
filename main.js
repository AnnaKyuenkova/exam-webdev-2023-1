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
                nameCell.innerHTML = route.name;
                descriptionCell.innerHTML = route.description;
                mainObjectCell.innerHTML = route.mainObject;
            }
        }
    };

    xhr.send();
}

getRoutes(1);