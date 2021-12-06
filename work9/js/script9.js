/*Django + Ajax скрипты*/
const URL = 'http://127.0.0.1:8000/';
//

/*
let i =0;
let buttons = document.querySelectorAll('.btn') // находим кнопку
    buttons[0].addEventListener('click', function(){ // привязываем ajax-запрос на кнопку
    
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
        /*
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
        console.log('>>')
    })
// ajax-запрос c использованием axios
function getAjaxAxios(){
    const promise = axios.get(testUrl); // метод get
        return promise //
}
/*let promiseAxios = getAjaxAxios();
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
/*---------------------------------------- */
//
function clickHTML(id, email, name, body){ // ф-ция возвращает разметку HTML 
    return `
    <div class="post">
        <p class="id">${id}</p>
        <p class="email">${email}</p>
        <p class="name">${name}</p>
        <p class="body">${body}</p><br>
    </div>
    `;
};
//
function handleClickHTML(id,element){ // ф-ция возвращает разметку HTML для syslog
    return `
    <div class="post">
        <p class="textContent">${id}: ${element}</p>
    </div>
    `;
};
//
function addFhoto(id, title, thumbnailUrl){
    return `
    <div class="post" display="flex">
        <p class="id">${id}</p>
        <p class="title">${title}</p>
        <img class="thumbnailUrl" src="${thumbnailUrl}">
    </div>
    `;
}
//
function handleButton(){
    return `
        <button class="next-content"> Далее </button>       
        `;
    }
//
let interval = NaN // переменная для setInterval
let buttons = document.querySelectorAll('.btn'); // jquery-test
    buttons[0].addEventListener('click', function(){
        //
        document.querySelector('.content').innerHTML = '' // очистим content
        const promise = $.ajax(URL); // пробуем jquery
        promise.then((data)=>{
            //
            function recur(id = 0, count=0) { 
                if (count < 10){                  
                    document.querySelector('.content').innerHTML += handleClickHTML(id, data['syslog'][id]);
                    id++; count++; 
                    recur(id, count) //
                }
                else{
                    document.querySelector('.content').innerHTML += handleButton() // добавляем кнопку
                    document.querySelector('.next-content').addEventListener('click', function(){ 
                        // при нажатии, удаляем кнопку и вызываем рекурсивно recur() с параметрами.  
                        document.querySelector('.next-content').remove() // удаляем кнопку
                        recur(id, count = 0); // 
                    })
                }
            }; recur(0)   
        });
    });
//
buttons = document.querySelectorAll('.btn'); // axios-test2
    buttons[1].addEventListener('click', function(){
        document.querySelector('.content').innerHTML = '' // очистим content
        const promise = axios.get(testUrl); // пробуем  axios
        let id = 0;
        promise.then((data)=>{
            data.data.forEach(element =>{
                if (id < 5){
                    document.querySelector('.content').innerHTML += clickHTML(element.id, element.email, element.name, element.body)
                    id++
                }
                else{return};
            });            
        });
    });
//
buttons = document.querySelectorAll('.btn'); // fetch-test
    buttons[2].addEventListener('click', function(){
        //
        document.querySelector('.content').innerHTML = '' // очистим content
        const promise = fetch('https://jsonplaceholder.typicode.com/todos'); // пробуем fetch
            //
            promise.then((response) => {
                console.log(response.json())
            })
    });
//
buttons = document.querySelectorAll('.btn'); // jquery добавляем фото
    buttons[3].addEventListener('click', function(){
        clearInterval(interval)   // очищаем setInterval
        document.querySelector('.content').innerHTML = '' // очистим content
        //
        function addCards(id=0, count=0){
            if (count < 5){
                let promise = $.ajax('https://jsonplaceholder.typicode.com/photos')
                    promise.then((data)=>{
                        document.querySelector('.content').innerHTML += addFhoto(data[id].id, data[id].title, data[id].thumbnailUrl)
                        id++ ; count++
                        addCards(id, count);
                })
            }
            else{ 
                document.querySelector('.content').innerHTML += handleButton() // добавляем кнопку
                document.querySelector('.next-content').addEventListener('click', function(){
                    // при нажатии, удаляем кнопку и вызываем рекурсивно recur() с параметрами.  
                    document.querySelector('.next-content').remove() // удаляем кнопку
                    addCards(id, count = 0); // рекурсия , обнуляем count
                })
            }
        }; addCards(0, 0); // Вызываем ф-цию на клик мыши
    });

//
buttons = document.querySelectorAll('.btn'); // очистить 
    buttons[4].addEventListener('click', function(){
        clearInterval(interval)   // очищаем setInterval     
        document.querySelector('.content').innerHTML = ''; // очистить
    });
//
