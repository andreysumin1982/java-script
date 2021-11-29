//  Подсчитайте сумму чисел в диапазоне от 1 до 10 с помощью 
//  цикла for, while и do...while.
// for
let summa = 0
for (let i=1; i<=10; i++){
    summa += i;
}
console.log(summa);
// while
let i = 0;
let sum = 0
while (i <= 10){
    sum += i;
    i ++;
}
console.log(sum);
/*С помощью метода document.write() вывести друг под другом 5 
абзацев от 200 до 600px шириной в виде лесенки с текстом 
“Абзац ..цифра..”. Ширину нужно указывать при выводе абзаца 
в теге <p> в атрибуте style="". Цвет фона, рамку и отступы можно 
указать для класса/тега в css-свойствах.*/
//
function styleElement(element, width = 'auto', height='auto', background = '') {  // стили для родителя и детей
    element.style.width = width;
    element.style.height = height;
    element.style.margin = 'auto auto auto auto';
    element.style.padding = '10px 10px 10px 10px';
    element.style.border = '1px solid silver';
    element.style.background =  background; 
};
function runCreateElement(){  // 
    //
    let body = document.querySelector('body');// body
    let div = document.createElement('div'); // создаем div  в теле body
        div.className = 'parent'; // добаляем класс
    let parent = body.appendChild(div); // добавляем эл. на страницу (в body)
        styleElement(parent, '50%'); // Вызываем ф-цию стилей для всех эл.
        parent.querySelector('.parent'); // объявляем div как родителя.
    //
    let childElement;  /*= document.createElement('div'); // создаем детей */
    //
    for (i =1; i<=10; i++){ // в цикле добавл. детей. 
        childElement = document.createElement('div'); // создаем детей 
        childElement.className = `child${i}`; // добаляем класс
        //
        parent.appendChild(childElement);
        parent.querySelector(childElement.className);
        //
        styleElement(childElement, `${i}0%`, '40px', '#8aafdf'); // Вызываем ф-цию стилей
        childElement.style.margin = '0 auto 10px auto';
        //childElement.querySelector(`.child${i}`);      
    }
}
//runCreateElement(); // Вызываем ф-цию 


/*Задача 4. С помощью метода document.write() необходимо 
вывести друг под другом 5 абзацев с текстом “Абзац ..цифра..” и разным цветом фона, 
который задается с помощью случайных чисел (используйте метод Math.random()) 
в диапазоне от 0 до 255. Цвет фона можно задать в системе 
rgb() в атрибуте style в виде style="background-color: rgb(255, 12, 134)". */

function randomColor(){
    dictLetter = {
            1:  'A',
            2:  'B',
            3:  'C',
            4:  'D'};

    resultInt = Math.round(Math.random()*255); // 0-255
    resultInt2 = Math.ceil(Math.random(1)*4); // 1-4
    return `#${dictLetter[resultInt2]}${resultInt}`; // возвр. строку
};
console.log(randomColor());
//
function runCreateDiv(parent, child){
    /* ф-циф создает родительск. элемент div с классом "parent", 
    а в нем дочерние эл. div с классом "child" */
    let parentDiv = document.querySelector(parent); // body
    let childDiv = document.createElement(child); // создаем div  в теле body
        childDiv.className = 'parent'; // добаляем класс
    let parentDivEl = parentDiv.appendChild(childDiv); // добавляем эл. на страницу (в тег body)
        parentDivEl.querySelector('.parent'); // объявляем div как родителя.
    styleElement(parentDivEl, '90%'); // Вызываем ф-цию стилей для всех эл.
    //
    let childDiv2;
    let childP;
    for (let i=0; i<=4; i++){
        childDiv2 = document.createElement('div');
        childDiv2.className = (`.child${i}`);
        //
        parentDivEl = childDiv.appendChild(childDiv2);
        parentDivEl.querySelector(childDiv2.className);
        styleElement(childDiv2, '100%', '50px', randomColor());
        childDiv2.style.margin = '10px auto 10px auto';
        //
        childP = document.createElement('p');
        childP.className = (`.childP${i}`);
        childP.innerHTML = (`Text${i}`);

        parentDivEl = childDiv2.appendChild(childP);
        parentDivEl.querySelector(childP.className);
        childP.style.marginLeft = '45%';
    };
};
runCreateDiv('body', 'div');
//
/*Создайте таблицу из 6 строк и 4 столбцов с пронумерованными ячейками в ней.*/
function table(){
    let s = '';
    for (let i=1; i<=6; i++){
        for (let j=1; j<=4; j++){
            s += '*' + ' ';
        };
        console.log(`${i} ${s}`);
        s = '';
    };
};
//table();
//
/*Выведите методом document.write() или console.log() звездочки от 1 до 7 штук в виде треугольника*/
function traingle(){
    let str = '';
    for (let i=0; i<=6; i++){
        str += '*' + ' ';
        //console.log(str);
        document.write(str,'<br>');
    };
};
traingle();
//
/*Создайте шахматную доску в виде таблицы, в которой чередуются ячейки с белым и черным цветом фона. */
function chessboard(){
    // алгоритм
    document.write('<br>');
    let str = '';
    for (let i=0; i <=7; i++){
        for(let j=0; j<=7; j++){
            if ((i+j) % 2 == 0){
                str += 'x' + ' ';
                }
            else{
                str += '0' + ' ';
                };
        };
        document.write(str, '<br>');
        str = '';  
    };
};
chessboard();
document.write('<br>');
/*Выведите методом document.write() или console.log() 
звездочки от 1 до 7 штук в виде ёлочки*/
//
function christmasTree(x) {
    if(x < 3) {
        return "";
    }
    let tree = "";
    for(let i = 1; i <= x; i++) {
        for(let j = 1; j <= x + x - 1; j++) {
            if(j <= x - i || j >= x + i) {
                tree += " ";
            } else {
                tree += "*";
            }
        }
        tree += "\n";
        document.write(tree, '<br>');
    }
    return tree;
};
console.log(christmasTree(3));