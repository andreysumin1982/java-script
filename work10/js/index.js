/*Создание элементов на странице для GET/POST - Запросов*/
//
function addElement(child, parent = 'body', classChild = 'childBody', type = NaN){
    /*Ф-ция создает элемент на странице:
        На вход подаются 1 обязятельный элемент и 3 не обязательных:
     Дочерний (div, p, li ...), класс для дочернего элемента , родительский элемент - ('.classname'), тип дочернего элемента.
     По умолчинию все элементы создаются в теле документа body.
     */
    let childElement = document.createElement(child)
        childElement.type = type
        childElement.className = classChild
    document.querySelector(parent).appendChild(childElement)
}
//
addElement('header', 'body', 'header'); // создаем заголовок
addElement('div', '.header', 'div-input', '') // создаем контейнер для поля ввода
addElement('p', '.div-input', 'text-input') // Создаем текст над полем ввода
addElement('input', '.div-input', 'input', 'search') // создаем поле ввода
addElement('div', '.header', 'div-button', '') // создаем контейнер для кнопки
addElement('button', '.div-button', 'btn', '') // создаем кнопку
addElement('section', 'body', 'content') // создаем контейнер для вывода контента
//
document.querySelector('.text-input').innerHTML = 'GET/POST Запрос'
document.querySelector('.btn').innerHTML = 'Отправить'; // создаем надпись на кнопке
//
/* Обработчики событий на кнопку */
//


