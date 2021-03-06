/*Создание элементов на странице для GET/POST - Запросов*/
//
function addElement(child, parent = 'body', classChild = 'childBody', type = NaN, text = ''){
    /*Ф-ция создает элемент на странице:
        На вход подаются 1 обязятельный элемент и 3 не обязательных:
     Дочерний (div, p, li ...), класс для дочернего элемента , родительский элемент - ('.classname'), тип дочернего элемента.
     По умолчинию все элементы создаются в теле документа body.
     */
    let childElement = document.createElement(child)
        childElement.type = type
        childElement.className = classChild
        childElement.innerHTML = text
    document.querySelector(parent).appendChild(childElement)
};
//
function findElement(className){
    /*Ф-ция находит эдементы на странице по классу и
        возвращает массив элементов. 
    */
    return document.querySelectorAll(className) //массив объектов
};
//
// Обработчик промисов и вывод рузельтатов
function dataPromise(data){
    console.log(data)
    console.log(data.data)
    if (Array.isArray(data.data)){
        data.data.forEach(element =>{
            //console.log(element.id)
            result(element.id, element.title, element.body)
        })
    }
    else{ result(data.data.id, data.data.title, data.data.body) };
};
// Ф-ция рисует результаты в div .content
function result(id ,title, body){
    findElement('.content')[0].innerHTML += `<div class="dataPromise"> 
                                                <p class="text-id">${id}</p> 
                                                <p class="text-title">${title}</p>
                                                <p class="text-body">${body}</p>
                                            </div>`;
}
//
addElement('header', 'body', 'header'); // создаем заголовок
//
addElement('div', '.header', 'div-input1', ''); // создаем контейнер для поля ввода
addElement('p', '.div-input1', 'text-input1'); // Создаем текст над полем ввода
addElement('input', '.div-input1', 'input', 'search'); // создаем поле ввода 1
//
addElement('div', '.header', 'div-input2', ''); // создаем контейнер для поля ввода
addElement('p', '.div-input2', 'text-input2'); // Создаем текст над полем ввода
addElement('input', '.div-input2', 'input', 'search'); // создаем поле ввода 1
//
addElement('div', '.header', 'div-button', ''); // создаем контейнер для кнопки
addElement('button', '.div-button', 'btn', '');// создаем кнопку 1
addElement('button', '.div-button', 'btn', ''); // создаем кнопку 2
addElement('button', '.div-button', 'btn', ''); // создаем кнопку 3
//
addElement('section', 'body', 'content'); // создаем контейнер для вывода контента
//
document.querySelector('.text-input1').innerHTML = 'Имя';
document.querySelector('.text-input2').innerHTML = 'Коментарий';
//
/* Обработчики событий на кнопки */
findElement('.btn').forEach((button, index) => { // бежим по массиву
    switch(index) {
        case 0:{
            button.innerHTML = 'Отправить' // название
            button.addEventListener('click', function(){
                //findElement('.content')[0].innerHTML = '' // очистить весь контент
                let name = ''       // значения полей ввода
                let comments = ''   // значения полей ввода
                findElement('.input').forEach((input, index) => { 
                    if (index == 0) { name = findElement('.input')[index]} // Заносим в переменные значения полей ввода
                    else{comments = findElement('.input')[index]}
                })
                const promise = createTasks(1, name.value, comments.value)  // получаем промис из ф-ции
                    promise.then(dataPromise)
                    //
                    findElement('.input').forEach(input => { // Очищаем поля ввода
                        input.value = '';
                    })  
            })      
        
        }; break; //
        case 1:{
            button.innerHTML = 'Показать' // название
            button.addEventListener('click', function(){
                findElement('.content')[0].innerHTML = '' // очистить весь контент
                //console.log(getTasks())
                const promise = getTasks()  // получен промис из ф-ции
                    promise.then(dataPromise) // работаем с промисом, передаем его в ф-цию(обработчик промисов)           
            })
        }; break; //
        case 2:{
            button.innerHTML = 'Очистить' // название
            button.addEventListener('click', function(){
                findElement('.content')[0].innerHTML = '' // очистить весь контент
                findElement('.input').forEach(input => {
                    input.value = '';
                })  
            })
        }; break; //
    }
});


