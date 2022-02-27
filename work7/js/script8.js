/* ----------work7.html-------------- */
let elem = document.documentElement; // html (объект)
    console.log(elem);
//
let win = window // глобальный объект (св-ва, ф-ции для работы с DOM)
    console.log(win)
//
let loc  = window.location; // Инфо о странице (name, ip, dns .....)
    console.log(location);
//
let width = innerWidth; // Текущая ширина окна браузера
    console.log(width)
//
let navi  = navigator // Возвращает объект Инфо об устройстве ПК, ОС, браузер, заголовок, геолокация ...
    console.log(navi)
//----              ----    ---             -----
// Создаем елемент div
const div = document.createElement('div') //Создали div
//Добавим класс 
div.classList.add('wrapper') // добавили класс
//div.className = 'wrapper'  // можно и так 
// Поместим div внутрь тега body
const body = document.body // обращаемся к элементу body
    body.appendChild(div) // помещам div в body
//создать заголовок h1 (Document Object Model)
const header = document.createElement('h1');
    header.textContent = 'Document Object Model'; // добавили контент
// Добавить h1 перед div с классом content
div.insertAdjacentElement('beforebegin', header) // добавляем елемент
//Создать список ul и добавить 3 элемента с текстом (1,2,3)
        //  использ. обратные кавычки, можно писать разметку
const ul = ` 
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
`;
// поместить список во внутрь класса wrapper
div.innerHTML = ul // innerHTML, т.к ul - это разметка html !
//---------------------------------------------------------------
//Создать изображение
const img = document.createElement('img');
//добавить атрибуты к изо. source, width, класс super, св-во alt 'Super Man
// и поместить изо внуть элем. div с классом wrapper
img.src = 'https://picsum.photos/240';
img.width = 240;
img.classList.add('super');
img.alt = 'Super Man'
//
div.appendChild(img);
// Исползуя HTML разметку(строку), создать div с классом pDiv + c 2 параграфами
const pDiv = `
    <div class = pDiv>
        <p>p1</p>
        <p>p2</p>
    </div>
`;
// Поместить этот div c классом pDiv до елемента ul
const ulList = div.querySelector('ul'); // т.к ul доч.елемент, родитель явл. div .wrapper. Объявляем ul
    ulList.insertAdjacentHTML('beforebegin', pDiv); // добавляем html-разметку(строку)
//Добавить для 2 параграфа класс 'text'
const pText = document.querySelector('.pDiv');
pText.children[1].classList.add('text') // медод children возвр. массив эелементов
//удалить 1 параграф (p1)
pText.firstElementChild.remove(); // firstElementChild - 1 дочерн. елемент
//------------------------------------------------------------------------
/*создать ф-цию generateAutoCard, котор принимает 3 аргумента: brand, color, year
ф-циф должна возвращать разметку HTML:
<div class = 'autocard'>
    <h2>brand, year</h2>
    <p> Авто brand - year года  </p>
    <p> Возраст авто - years лет </p>
</div> */
const generateAutoCard = (brand, year, color) => {
    const curDate = new Date; // объект data
    const curYear = curDate.getFullYear(); // текущий год 
    return   `
        <div class = 'autocard'>
            <h2>${brand.toUpperCase()}, ${year} г.</h2>
            <p>Авто ${brand.toUpperCase()} - ${year} года</p>
            <p>Возраст авто - ${curYear - year} лет</p>
            <p>Цвет: ${color}</p>
            <button type = 'button' class = 'btn'>Удалить</button>
        </div>   
    `;
};
//создать div с классом autos
const carsDiv = document.createElement('div');
    carsDiv.classList.add('autos')
//переместите div с классом autos в DOM до div с классом wraper
div.insertAdjacentElement('beforebegin', carsDiv)

// Создать 4 карточки авто используя в-цию generateAutoCard
let carsList = [
    {brand: 'ваз', year: 2008, color: 'Зеленый'},
    {brand: 'газ', year: 1993, color: 'Синий'},
    {brand: 'таз', year: 1985, color: 'Белый'},
    {brand: 'заз', year: 1978, color: 'Красный'},
];
// бежим по массиву (map), каждый итерируемый объект передае в ф-цию generateAutoCard
const carsHTML = carsList.map(car => {
    return generateAutoCard(car.brand, car.year, car.color)
}).join('') // метод join перобраз. в строку
// переместить карточки внутрь div с классом autos
carsDiv.innerHTML = carsHTML;
//
/*Добавит кнопку удалить на каждую карточку авто.
При клике на кнопу - удалить элемент из DOM
1. Выбрать все кнопки
2. Создать ф0цию удаления
3. Использовать цикл - чтобы повесить обработчик события на каждую кнопку
*/
// Выберем все кнопки
const buttons = document.querySelectorAll('.btn'); // Получаем массив элементов с классом btn
//Создаем ф-цию удаления
function handleClick(event){
    const currentButton = event.currentTarget; // !! currentTarget - при клике на кнопку получали нужную кнопку, на котор. нажали
        currentButton.parentElement.remove(); // parentElement - показывает родителя элемента buttn -это div с классом 'autocard'
        //currentButton.closest('.autocard').remove()
        //!! Есть более лучший метод - это closest('.название родителя').remove() Т.Е если у button будет еще вложенный div, то метод удалит и его т.к указано название родителя 
}
//Цикл для перебора элем. buttons:
/*Бежим циклом forEach, button - итерируемый объект массива, на него добавляем событие клика мыши
и передаем в функцию удаления handleClick */ 
buttons.forEach(button => {
    button.addEventListener('click', handleClick)
})
//------------------------------------------------------------------
// Создать div c классом inputDiv
const inputDiv = document.createElement('div');
    inputDiv.className = 'inputDiv';
body.appendChild(inputDiv)

//Добавить кнопку "Выбрать файлы" в div с классом cars 
const inputCars = document.createElement('input');
    inputCars.id = 'id_file';
    inputCars.className = 'inputCars';
    inputCars.type = 'file';
    inputCars.multiple = 'true'; //позволяет выбрать множество файлов
    inputDiv.appendChild(inputCars);
    //inputCars.insertAdjacentElement('beforebegin', divCars);

// Создать div c классом cars
const carDiv = document.createElement('div');
    carDiv.className = 'cars';
body.appendChild(carDiv)


//Ф-ция возвр. HTML div с классом file
function handleClick3(fileName){
    return `
        <div class="file">
            <image class="imageFile" src="img/${fileName}" width="150px">
        </div>
    `;
}
// Создать обработчик события на input
document.querySelector('.inputCars').onchange = ()=> { //onchange событие выбора ф-лов
    let files = document.querySelector('.inputCars').files;
        console.log(files);
    //
    for (let file=0; file < files.length; file++){
        console.log(files[file])
        //console.log(files[file].name)
        //console.log(files[file].size)
        let reader = new FileReader();
            reader.readAsText(files[file]);
            reader.onload = () => {
                console.log(typeof(reader.result))
                //divCars.innerHTML = reader.result
                carDiv.innerHTML += handleClick3(files[file].name)
        };
    }
};
//-----------------------------------

