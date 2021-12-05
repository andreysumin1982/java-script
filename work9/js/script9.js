/*Django + Ajax скрипты*/
const URL = 'http://127.0.0.1:8000/';
//

let i =0;
const button = document.querySelector('.btn') // находим кнопку
button.addEventListener('click', function(){ // привязываем ajax-запрос на кнопку
    
    //
    function handleClickHTML(element){ // ф-ция возвращает разметку HTML 
        return `
        <div class="post">
            <p class="textContent">${element}</p>
        </div>
        `;
    };
    // Ajax с исппользованием XMLHttpRequest (устаревший способ)
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
        //json_data['run'].forEach(element => { // бежим по объектам и передаем  (id, title) в ф-цию handleClick
            //console.log(element)
            // и размещаем в теге body
            //document.querySelector('body').innerHTML += handleClickHTML(element);
        //});
        setInterval(()=>{
            if (i < 30){                
                document.querySelector('.content').innerHTML += handleClickHTML(json_data['syslog'][i])
                i++ 
            }
            else{ return }
            },30);      
        });
})    
/*----------*/
//--ajax-запрос с использованием Jquery --------------
testUrl = 'https://jsonplaceholder.typicode.com/comments';
//
// Переделаем ajax-запрос с промисом, поместив в ф-цию getAjax()
function getAjax(){
    const promise = $.ajax(testUrl);
        return promise; // возвращаем результат ajax-запроса
}
//
let promise = getAjax() // передаем результат в переменную и работаем с промисом (then)
    promise.then((data) => {
        console.log('data')
    })
// ajax-запрос c использованием axios
function getAjaxAxios(){
    const promise = axios.get(testUrl); // метод get
        return promise //
}
let promiseAxios = getAjaxAxios();
    console.log(promiseAxios)
    //
    promiseAxios.then((data) =>{ // промисы
        console.log(data.data)
    })
    promiseAxios.then((headers)=>{ // промисы
        console.log(headers.headers)
    })
    promiseAxios.then((request)=>{ // промисы
        console.log(request.request.responseURL)
        console.log(request.request.status)
    })