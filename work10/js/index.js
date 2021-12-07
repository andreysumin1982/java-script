/*Создание элементов на странице для GET/POST - Запросов*/
//
function addElement(child, classChild = 'childBody', type = NaN, parent = 'body'){
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
addElement('header', 'header'); // создаем заголовок
addElement('div', 'div-input', '' ,'.header') // создаем контейнер для поля ввода
addElement('input','input', 'search', '.div-input') // создаем поле ввода
addElement('div', 'div-button', '', '.header') // создаем контейнер для кнопки
addElement('button', 'btn', '', '.div-button') // создаем кнопку
addElement('section', 'content') // создаем контейнер для вывода контента
//
document.querySelector('.btn').innerHTML = 'Отправить'; // создаем надпись на кнопке


