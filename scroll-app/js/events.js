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
    return document.querySelector(className).innerHTML = `Output: ${data}`
}
/* */
let content1 = findOneElement('.content1')
    content1.addEventListener('scroll', ()=>{
        // let s = sc.scrollTop
        // showDataOutput('.indications', s)
        let sh = content1.scrollHeight //высота всего контента с прокруткой
        let st = content1.scrollTop //содержит высоту прокрученной части элемента сверху. (начинается с 0)
        let ch = content1.clientHeight // содержит высоту элемента внутри границ вместе с padding, !! НО  без border и прокрутки
        showDataOutput('.indications1', (sh - st) === ch)
    })

let content2 = findOneElement('.content2')
    content2.addEventListener('scroll', ()=>{
        // let s = sc.scrollTop
        // showDataOutput('.indications', s)
        let sh = content2.scrollHeight //высота всего контента с прокруткой
        let st = content2.scrollTop //содержит высоту прокрученной части элемента сверху. (начинается с 0)
        let ch = content2.clientHeight // содержит высоту элемента внутри границ вместе с padding, !! НО  без border и прокрутки
        showDataOutput('.indications2', sh-st===ch)
    })
