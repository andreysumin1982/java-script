/* Модальное окно */

//
function addStyle(element){
    element.style.width = '100%'
    element.style.border = '1px solid silver'
    element.style.borderRadius = '3px'
    element.style.marginBottom = '10px'
    element.style.padding = '10px'
}
//
function addImage(filename){
    // создаем div с классом childImage
    return `
        <div class="childImage">
            <img class="imageFile" src="img/${filename}" width="150px">
        </div>
    `;
};
//

// Создаем div с классом div_btn
let div_btn = document.createElement('div');
    div_btn.classList.add('div_btn');
    document.body.appendChild(div_btn);
    addStyle(div_btn); // стили
//Создаем кнопку "Обзор" в div_btn
let btn_file = document.createElement('input');
    btn_file.classList.add('btn_file');
    btn_file.type = 'file';
    btn_file.multiple = 'true';
    div_btn.appendChild(btn_file);
// Создаем div с классом div_image;
let div_image = document.createElement('div');
    div_image.classList.add('div_image');
    document.body.appendChild(div_image);
    addStyle(div_image);
// Создаем обработчик события на кнопку "Обзор" выбор файла(ов)
let copy_files = '';
document.querySelector('.btn_file').onchange = function(){  // onchange 
    let files = document.querySelector('.btn_file').files;
    copy_files = files;
    //console.log(files);
        for(let index = 0; index < files.length; index++) { // бежим по массиву
            console.log(files[index].name); // имя файла
            div_image.innerHTML += addImage(files[index].name); // передаем в ф-цию addImage имя файла   
        };   
    // Создаем обработчик события (клик мыши) на картинку.
    let imgs = document.querySelectorAll('.childImage') // достаем все элементы div c классом "childImage"
        //console.log(imgs)
        imgs.forEach(element =>{  // бежим по массиву
            element.addEventListener('click', ()=>{
                console.log(element.className) // 
            })
        })// 
    };    
//






//

/*По сути название события onchange происходит при изменении каких-либо данных в полях формы. 
Следует учитывать, что событие onchange наступает далеко не для всех элементов формы, 
поэтому и обработка его выполняется для:

    текстовых полей при потере фокуса после изменения значения
    выпадающих списков (select)
    полей для ввода чисел (number)
    ползунков (range)
    флажков (checkbox)
 */