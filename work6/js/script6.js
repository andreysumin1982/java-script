/*адача 2. Создайте эффект печатной машинки, 
выводя какую-нибудь заранее заготовленную фразу 
или попросив пользователя ее ввести. 
Решите задачу с помощью  setInterval() и setTimeout(). */
//
//let str = prompt('Введите фразу:','');
let mouseClick = document.querySelector('.g1')
    mouseClick.addEventListener('click',() => { // событие по клику мыши
        let i = 0;
    setInterval(function printText(){
        //setInterval()
        let str = 'Создайте эффект печатной машинки.';
        if (i != str.length){
            document.querySelector('.g1').innerHTML += `${str[i]}`;
            i++;
        }
        else{
            return;   
        }
    }, 100);
});
    //
let mouseClick2 = document.querySelector('.g2');
mouseClick2.addEventListener('click',() => {   // событие по клику мыши
    //
    let k;
    let timerID = setTimeout(function printText2(k=0){
        //setTimeout()
        let str2 = 'Создайте эффект печатной машинки';
        //
        if (k != str2.length) {
            document.querySelector('.g2').innerHTML += `${str2[k]}`;
            //
            timerID = setTimeout(() => printText2(++k), 200)
        }
        else{
            return;
        }
    }, 200);
});

/*---------------------------------------------*/

/* Выведите в тело документа 15 <span>-элементов с классом .circle, 
например, которые представляют собой круг, 
через равные промежутки времени (500 - 800ms). 
Но сначала выводится круг красного, потом желтого, 
потом зеленого цвета, а затем цвета поторяются: красный, желтый, зеленый. 
*/
let mouseClick3 = document.querySelector('.container3')
mouseClick3.addEventListener('click',() => { // событие по клику мыши
//
    function changeColor(element, iter = 0){
        color = ['red', 'yellow', 'green'];
        element.style.background = color[iter];
    };
    //
    let l = 0;
    let element = document.querySelector('.container3').children; // получаем детей класса container3
    //
    for (let j of element){ // бежим по доч. елементам класса container3
        //
        let arr_j = (j.className).split(' ') // выводим сплитом ['circle', 'c{}']
        //console.log(document.querySelector(`.${arr_j[1]}`), arr_j[1]) // выводим классы circle c{}
        let elem = document.querySelector(`.${arr_j[1]}`)
        //
        if (l != 3 ){
            changeColor(elem, l)
                l++
            }
        else{
            l = 0
            changeColor(document.querySelector(`.${arr_j[1]}`), l)
            l++
        };
    };
});
/*---------------------------------------------------------------*/
//---randomInt-----
function getRndInteger(minimum, maximum) {
    // ф-ция возвр. случ.число из диапозона maximum - minimum. 
    return Math.floor(Math.random() * (maximum - minimum)) + minimum;
    } 
let int = getRndInteger(-3, 4)
    document.querySelector('.g4').innerHTML += `. Случайное число: ${int}`;
//-----------------

/*адача 1. Напишите функцию, которая принимает 2 числа и возвращает 1, 
если первое число больше, чем второе; -1, если первое число меньше, чем второе, и 0, если числа равны.

Попробуйте реализовать эту функцию не только с помощью if...else, 
но и с помощью тернарного оператора, и в виде стрелочной функции. */
//
function getInt(int1, int2){
    if (int1 > int2) return 1
    else if (int1 < int2) return -1
    else return 0
};
console.log(getInt(6, 8));
//
function getInt2(int1, int2){
   console.log((int1 > int2) ? '1' :
   (int1 < int2) ? '-1':'0')
};
getInt2(4,4);
//
/*Задача 3. Напишите функцию, которая принимает 2 параметра: 
длину и ширину прямоугольника и вычисляет его площадь. 
Если в функцию передали 1 параметр, то функция вычисляет площадь квадрата. */
function showArea(){
    console.log(arguments.length);
    (arguments.length == 1) ? console.log(`Площадь квадрата = ${arguments[0]**2}`):
                            console.log(`Площадь прямоугольника = ${arguments[0]*arguments[1]}`)
};
showArea(6, 4);
//
/*Задача 1. Напишите функцию, которая принимает произвольное количество аргументов в виде строк 
и выводит их через пробел с помощью document.write() в тело html-документа. 
Например, функция  showWords("I've", "been", "learning", "JavaScript", "for", "a", "month") 
должна вывести фразу "I've been learning JavaScript for a month". */
function showWords(){
    console.log(arguments.length);
    console.log(arguments)
    let arr_st = []
    for (let arg of arguments){
        arr_st.push(arg)
    }
    return arr_st.join(' ')
}
let s = showWords("I've", "been", "learning", "JavaScript", "for", "a", "month")
//
let obj_str = {};
for (let i = 0; i < (s.length); i++){
    if (s[i] in obj_str){
        obj_str[s[i]] += 1
    }
    else{
        obj_str[s[i]] = 1
    }
};
console.log(obj_str)
//
/*
Задача 1. Создайте функцию, которая с помощью document.write() 
будет добавлять в тело документа абсолютно позиционированную картинку столько раз, 
сколько пользователь запишет вызовов внутренней возвращаемой функции. 
Каждый раз изображение должно уменьшаться в ширине на 50-100px (на скриншоте - на 60px) и 
располагаться по центру предыдущей картинки, создавая эффект глубины.
Для того чтобы назначить координаты left и top для картинки, 
используйте данные свойства window.innerWidth и window.innerHeight таким образом:
Центрирование изображения с помощью JavaScript

let left = (window.innerWidth - текущая_ширина_картинки)/2;
	
let left = (window.innerWidth - текущая_ширина_картинки)/2;

В функцию изначально должны передаваться 2 параметра - это первоначальная ширина и url картинки. 
В качестве url можете использовать любое изображение с unsplash.com (как подключать фото с unsplash.com).

В примере на скриншоте использована картинка https://source.unsplash.com/NN83EXPgQ5c/600x600.

Во вложенной функции вы меняете текущую ширину картинки на 50-100px     */
//
let URL = 'https://source.unsplash.com/NN83EXPgQ5c/600x600';
let URL2 = 'img/car1.jpg'
//
function setStyleDiv(div, width, img){
    // стили для div
    div.style.border = '1px solid silver';
    div.style.borderRadius = '3px';
    div.style.backgroundColor = 'yellow'
    div.style.width = `${width}px`;
    div.style.height = `${width}px`;
    div.style.margin = '50px';
    // стили для img
    img.style.width = `${width}px`;
    img.style.position = 'absolute';
};
//
function depthEffect(width, url, i=0){
    if (width <= 10){
        return;
    }
    else{
        let parent = document.querySelector(`.cont${i}`) // объявляем родилеля div .cont0
            i++;//
        let div = document.createElement('div') // создаем дочерний div
            div.className = `cont${i}` // объявляем для него класс
        let childDiv = parent.appendChild(div) // добавляем дочерний div к родителю 
            childDiv.querySelector(`.cont${i}`) // объявляем дочерний div   
            //
            let image = document.createElement('img'); // создаем дочерний элемент img
                image.className = `image${i}`; // класс для него
                image.src =  `${url}`; // путь, где лежит картинка
            let img_parent = childDiv.appendChild(image);// добавляем вочерний div элемент img
                img_parent.querySelector(`image${i}`); // объявляем img
            //
            setStyleDiv(childDiv, width, img_parent) // применяем стили созданному div и img        
            //
        depthEffect(width-100, url, i); // рекурсивно вызываем, уменьшая ширину на 100px
    }
}
//
depthEffect(800, URL);
//
var control = document.getElementById("your-files");
control.addEventListener("change", ()=> {
  // Когда происходит изменение элементов управления, значит появились новые файлы
  var i = 0,
    files = control.files,
    len = files.length;

  for (; i < len; i++) {
    console.log("Filename: " + files[i].name);
    console.log("Type: " + files[i].type);
    console.log("Size: " + files[i].size + " bytes");
  }

}, );
