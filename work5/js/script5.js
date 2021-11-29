/*Создайте шахматную доску в виде таблицы (<div>), 
в которой чередуются ячейки с белым и черным цветом фона. */
//
function styleParentDiv(element){
    // Стили для родительского div
    element.style.margin = 'auto';
    element.style.width = '38vw';
    element.style.padding = '3px';
    element.style.border = '1px solid silver';
    element.style.background = 'yellow'
};
//
function styleChessBoard(element, background = ''){
    // Стили для шахматной доски (клеток)
    element.style.width = '4.5vw';
    element.style.height = '10vh';
    element.style.border = '1px solid silver';
    element.style.margin = '1px auto 1px auto';
    element.style.background = background;
};
//
function createParentDiv(){
    // Ф-ция создает родительский div, для шахм.доски
    let parent = document.querySelector('body');
    let div = document.createElement('div');
        div.className = 'chessboard';
    let childDiv = parent.appendChild(div);
        childDiv.querySelector('.chessboard');
    // Вызываем ф-цию styleParentDiv()
    styleParentDiv(childDiv);
};
//
createParentDiv(); // Создаем Родительский div
//
function createChildDiv(){
    // Ф-ция создает дочерние элементы (клетки) в родительском div .chessboard
    let parent = document.querySelector('.chessboard');
    let div = document.createElement('div');
        div.className = 'child';
    let childDiv = parent.appendChild(div);
        childDiv.querySelector('.child');
    return childDiv;    
};
//
function chessBoard(){
    // алгоритм
    let board = '';
    for(let i=0; i<=7; i++){
        for(let j=0; j<=7; j++){
            if ((i+j) % 2 == 0){ 
                board += 'x' + ' '; // добавляем 
                styleChessBoard(createChildDiv(), 'white');
            }
            else{
                board += '0' + ' '; // добавляем
                styleChessBoard(createChildDiv(), 'gray');
            }
        }
    document.write(board, '<br>');    
    board = ''; // обнуляем после каждого прохода i
    }
};
chessBoard();
//
/*Массивы
Задача 1а. Используя метод splice(), замените в массиве, 
состоящем из нескольких строковых переменных, складывающихся в одно предложение, 
указанное пользователем слово.
Вам необходимо спросить у пользователя номер слова, которое нужно удалить, 
а затем, на какое слово нужно заменить. 
После этого нужно вывести массив в виде цельной фразы с пробелами, используя метод join() */
//
let str = 'После этого нужно вывести массив в виде цельной фразы';
let lst = str.split(' '); // переводим в список.
console.log(lst)
//
function change(arr){
    //
    let num = '';
    while (true){
        num = prompt(`Выберите номер от 1-${arr.length}`,'');
        if (!num){
            return alert('Fail')
        }
        else if (!Number(num)){ // Если не число.
            alert('Введен символ, введите число.. ')
            continue;
        }
        else if (num <= 0 || num > arr.length ){
            alert(`Нужно ввести число в диапозоне от 1 до ${arr.length}.`)      
            continue;
            }
        else{
            break;
        };
    };
    // 
    let str =prompt('Введите любое слово.','');
    if (!str){
        return alert(arr.join(' '));
    };
    //
    arr.splice(num-1, 1, str);
        let result = arr.join(' ');
        alert(`${result}`);
};
//
function deleteElement(arr){
    let old_arr = arr.concat()// копируем  массив 
    arr.splice((arr.length)-2, 1); // удаляем предпоследний елемент в массиве
    console.log(`Было:  ${old_arr}\nCтало: ${arr}`) // вывод
};
//
//change(lst); // вызов ф-ции.
deleteElement(lst)
//
/*Задача 2. Создайте массив из 20 случайных чисел в диапазоне от 1 до 100. 
Выведите в консоль или с помощью document.write():
    все четные числа этого массива
    все числа, которые делятся на 3
    все числа, которые делятся на 5
    все числа, которые делятся на 10
 */
//
function arrayRandomDigitals(){
    // ф-ция создает массив из 20 случ. чисел
    let arr = []; // массив для случ. чисел
    let randomDigital;
    //
    for (let i = 0; i <=19; i++ ){ // от 0 до 19
        arr.push(randomDigital = Math.round(Math.random(1)*100)); // добавляем в массив случ. числа
    };
    //
    return arr;
};
//
let rand = arrayRandomDigitals().concat();
let arr1 = [];
let arr2 = [];
let arr3 = [];
let arr4 = [];
for (let i of rand){
    if (i % 2 == 0){
        arr1.push(i)
    }
    else if (i % 3 == 0){
        arr2.push(i)
    }
    else if (i % 5 == 0){
        arr3.push(i)
    }
    else if (i % 10 == 0){
        arr4.push(i)
    }
};
console.log(`Все четные числа.\nБыло:  ${rand}\nСтало: ${arr1}`);
console.log(`Числа, которые делятся на 3\nБыло:  ${rand}\nСтало: ${arr2}`);
console.log(`Числа, которые делятся на 5\nБыло:  ${rand}\nСтало: ${arr3}`);
console.log(`Числа, которые делятся на 10\nБыло:  ${rand}\nСтало: ${arr4}`);
//
/*Задача 3. Есть массив студентов.
1. С помощью методов unshift() и  push() добавьте к существующим студентам Березина и Ященко.
2. Затем удалите с помощью splice() Семенова и добавьте вместо него Ковалеву и Горобченко.
3. Добавьте к этому массиву второй массив с помощью метода concat() или spread-оператора.
4. Отсортируйте массив по алфавиту.
*/
// Список студентов
let students = ['Филонов',
                'Кузьменков',
                'Валов',
                'Изюмов',
                'Молчанов',
                'Анишин',
                'Семенов',
                'Фролов',
                'Громов',
                'Яшин',
                'Темнов'
                ];
//
function callPrompt(text=''){
    // ф-ция возвр. диалоговое окно ввода. 
    return prompt(text,'');
};
//
function addStudentsStart(student){
    // Добавляет в начало массива
    students.unshift(student);
};
function addStudentsEnd(student){
    // Добавляет в конец массива
    students.push(student);
};
function sortStudents(){
    // сортировка массива по алфавиту
    // sort() По умолчанию элементы сортируются как строки.
    students.sort();
};
function delAddStudents(){
    // Удаляет студента из массива и добавляет 2-х других 
    let name1 = callPrompt('Фамилия студента на удаление: ');
    let name2 = callPrompt('Фамилия первого студента в список: ');
    let name3 = callPrompt('Фамилия второго студента в список: ');
    //
    let index = students.indexOf(name1); // узнаем индекс элемента в массиве
    // Удаляет студента(name1) и добавляет 2-х других(name2,name3).     
        students.splice(index, 1, name2, name3); 
};
//
function student(){
    //let student1 = callPrompt('Добавить студента в начало списка: ');
    //let student2 = callPrompt('Добавить студента в конец списка: ');
    //
    //addStudentsStart(student1);
    //addStudentsEnd(student2);
    //delAddStudents();
    console.log(sortStudents());
    console.log(students);
    //
    
    for (let i of students){
        document.write(`${students.indexOf(i)}-${i}.`,'<br>');
    };
};
student();
//
/*Задача 1. Сделать светофор, который "зажигает" красный, желтый, зеленый цвет 
попеременно в html-разметке через 1,5 секунды. */
//
function changeColor(element, color = 'aliceblue'){
    /*Ф-ция меняет цвет у элемента (div .circle) */
    element.style.background = color;
};
//
let arr_colors = ['red', 'yellow', 'green'];
//
let timerID = setTimeout(function svetofor(color = 0){
    let child_div;
    //
    if (color < arr_colors.length){
        child_div = document.querySelector(`.${arr_colors[color]}`);
        // красми в цвет div. color
        changeColor(child_div, arr_colors[color]);
        // рекурсивно вызываем ф-цию с (color + 1); 
        timerID = setTimeout(() => svetofor(++color), 1000);
    }
    else {
        color = 0; // обнуляем color;
        // задаем всем div .color цвет 'aliceblue';
        setTimeout(() => {clearInterval(timerID); changeColor(document.querySelector('.red'), 'aliceblue'); },200);
        setTimeout(() => {clearInterval(timerID); changeColor(document.querySelector('.yellow'), 'aliceblue'); },200);
        setTimeout(() => {clearInterval(timerID); changeColor(document.querySelector('.green'), 'aliceblue'); },200);
        // рекурсивно вызываем ф-цию с color=0; 
        setTimeout(() => svetofor(color), 1000);
    }
}, 1000);
//
// -------------Светофор -------------------------------
let arr_div = []; //массив для добавления классов [red2, yellow2, green2]
let child = document.querySelector(".svetofor2").children; // получ. дочерние элементы.
    // перебираем 
    for (let i of child){
        arr_div.push(i.className.split(' ')[1]); //получаем классы (red2, yellow2, green2) и добавляем в массив.
    };
//
//console.log(arr_div);
let child_div2;
let k = 0;
let timerId2 = setInterval(function run(){
    //
    child_div2 = document.querySelector(`.${arr_div[k]}`)
    //console.log(child_div2)
    changeColor(child_div2, arr_colors[k])
    k++;
    //
    if (k == arr_colors.length){
        setTimeout(() => changeColor(document.querySelector('.red2')), 500);
        setTimeout(() => changeColor(document.querySelector('.yellow2')), 500);
        setTimeout(() => changeColor(document.querySelector('.green2')), 500);
        k = 0
    };
}, 1500);
//
    
