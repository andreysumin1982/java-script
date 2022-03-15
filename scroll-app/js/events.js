/* Событыия */
function findOneElement(className){
    /*
        Ф-ция находит эдемент на странице по классу и
        возвращает.
    */
    return document.querySelector(className) //массив объектов
};
/* */
function showDataOutput(className, data){
    /*
        Ф-ция находит элемент по классу и 
        размещает в нем данные
    */
    return document.querySelector(className).innerHTML += `Output: ${data}`
};
/* */
function addElement(child, parent = 'body', classChild = 'no_class', type = NaN, text = ''){
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
/* */
function processingData(data){
    /* ф-ция обрабатывает промис */
    for(let i=0; i<10; i++){
        data.forEach(element => {
            // console.log(element)
            showDataOutput('.content2', element.name)
        })
    };
};
/* */
function removeElement(element){
    /*
        Ф-ция удаляет html-элемент
    */
    findOneElement(element).remove()
}
/* */


/* */
let content2 = findOneElement('.content2')
    content2.addEventListener('scroll', ()=>{
        // let s = sc.scrollTop
        // showDataOutput('.indications', s)
        let sh = content2.scrollHeight //высота всего контента с прокруткой
        let st = content2.scrollTop //содержит высоту прокрученной части элемента сверху. (начинается с 0)
        let ch = content2.clientHeight // содержит высоту элемента внутри границ вместе с padding, !! НО  без border и прокрутки
        // showDataOutput('.indications3', sh-st===ch)
        if (sh-st===ch){
            if (findOneElement('.btn')){
                removeElement('.btn')
            }
            else{
                console.log('ok')
                //content2.style.position = 'relative';
                addElement('input', '.content2', 'btn', 'button')
                let btn = findOneElement('.btn')
                    btn.value = 'Далее'
                    btn.addEventListener('click', ()=>{
                        ajaxRequest().then(response =>{    
                            processingData(response.data)   // передаем промис в ф-цию processingData)
                            removeElement('.btn')
                    })                
                })
            }           
        }
    });
/* */
