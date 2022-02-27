/*
    AJAX XMLHttpRequest
*/
/*
// Создаем экземпляр класса XMLHttpRequest (констроуктор)
const xhr = new XMLHttpRequest();
    console.log(xhr); // Выводим методы, св-ва экземпляра
    //
    // открываем запрос (метод GET),  open - настраивает запрос для отправки на сервак. 
    const URL = 'https://jsonplaceholder.typicode.com/posts';
    //const URL2 = xhr.setRequestHeader('Access-Control-Allow-Origin', 'http://api.192.168.220.72');
    xhr.open('GET', URL);
    //
    xhr.send(); // отправляем свормированный запрос.
    // получаем данные с сервака (метод load - получен ответ от сервака, 
    // () =>{} обработчик события.. выводим )
    xhr.onload = (() => {
        if (xhr.status == 200){
            console.log(`${xhr.statusText}: Данные с сервера ${URL} получены.`)
            console.log(xhr.responseURL) // url
            //
            //получаем объект json
            const data = JSON.parse(xhr.response)
            console.log(data) // выводим 
        }
        else { console.log(`${xhr.statusText}: Сервер не доступен.`) } // иначе error
    });
    //
*/
/*--------------------------------------------------------------------------------------------------*/    
URL = 'https://jsonplaceholder.typicode.com/posts';
//
function handleClickHTML(id, title){ // ф-ция возвращает разметку HTML 
    return `
    <div class="post">
        <h1 class="header-post">${id}</h1>
        <p class="text-post">${title}</p>
    </div>

    `;
}
//
function ajax(url, method){
    /*
        Ф-ция отправляет запрос на сервер -> получает данные (json) и возвращает промис
    */
    // создаем промис 
    return new Promise((resolve, reject) => {
    // Создаем экземпляр класса XMLHttpRequest (констроуктор)
        const xhr = new XMLHttpRequest()
        // Открываем запрос (метод GET),  open - настраивает запрос для отправки на сервак.
            xhr.open(method, url)
            //
            xhr.send() // отправляем свормированный запрос. 
            //
            xhr.onload = () => { // если все прошло норм, получ. ответ от сервера
            if (xhr.status == 200 && xhr.readyState == 4){      
                resolve(xhr.response) // промис завершился
            }
            else {                          // иначе выводим ошибку
                reject(xhr.response)
            }
        }
        xhr.onerror = () =>{    // если на стадии отправки пошло те так, то выводи ошибку(и)
            reject(xhr.response)
        }
    })
};   
//
ajax(URL, 'GET').then(json_data => { // как только ф-ция отработала и вернула промис, далее идет метод then. 
    json_data = JSON.parse(json_data) // преобразуем в json
        //console.log(json_data) // выводим массив объектов
        //
    json_data.forEach(element => { // бежим по объектам и передаем  (id, title) в ф-цию handleClick
        // и размещаем в теге body
        document.querySelector('.mainpost').innerHTML += handleClickHTML(element['id'], element['title']);
    });
});
//
