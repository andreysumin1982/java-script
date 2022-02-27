/* Задание: создать Модальное окно */
//
function addStyle(element){
    element.style.width = '100%'
    element.style.border = '1px solid silver'
    element.style.borderRadius = '3px'
    element.style.marginBottom = '10px'
    element.style.padding = '10px'
}
//
function addImage(filename, width=150){
    // создаем div с классом childImage
    return `
        <div class="childImage">
            <img class="imageFile" src="img/${filename}" name="${filename}" width="${width}px">
        </div>
    `;
};
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
document.querySelector('.btn_file').onchange = function(){  // onchange 
    let files = document.querySelector('.btn_file').files;
        //console.log(files);
        for(let index = 0; index < files.length; index++) { // бежим по массиву
            console.log(files[index].name); // имя файла
            div_image.innerHTML += addImage(files[index].name); // передаем в ф-цию addImage имя файла   
        };   
    // Создаем обработчик события (клик мыши) на картинку.
    let imgs = document.querySelectorAll('.childImage') // NodeList [ div.childImage ...] достаем все элементы div c классом "childImage"
        //console.log(imgs) // NodeList [ div.childImage ...]
        imgs.forEach(element =>{  // бежим по массиву 
            //console.log(element) // <div class="childImage">
            element.addEventListener('click', ()=>{ // событие клик по элементу img
                //console.log(element.children[0].name) // получаем имя файла
                let modal = document.querySelector('.modal') // получаем модальное окно (div) 
                    modal.style.display = "block" // изменяем состояние на block(блочный элемент)
                //
                let modalContent = document.querySelector('.modal_content') //получаем контентную часть (окно div)
                    modalContent.innerHTML = addImage(element.children[0].name, 600) // добавляем в него картинку, передавая в  ф-цию 
                //    
                window.onclick = function(event){ // клик, кроме контентного окна.
                //console.log(event) 
                    if (event.target == modal){ // если клик по модальному окну (div .modal)
                    modal.style.display = "none" // убираем контентное окно и изменяем состояние модального окна на "none"
                    }
                };
            });            
        });      
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