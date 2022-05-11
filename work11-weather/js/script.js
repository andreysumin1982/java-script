//
const url = 'https://wttr.in/%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3';
//
function formatTime(){
    //* Ф-ция возвр. дату и время
    const date1 = new Date;
    const d = date1.getDate().toString().padStart(2, "0");
    const m = (date1.getMonth() + 1).toString().padStart(2, "0");
    const y = date1.getFullYear().toString();
    const h = date1.getHours().toString().padStart(2, "0");
    const min = date1.getMinutes().toString().padStart(2, "0");
    return `${d}-${m}-${y}, ${h}:${min}`;
};
//
function handlerObj(outputData){
    //* обработчик объекта HTMLDocument 
    document.querySelector('.date').innerHTML = `Сегодня: ${formatTime()}`
    document.querySelector('.name').innerHTML = `${outputData.body.innerHTML.slice(0,440)}`
    document.querySelector('.description').innerHTML = `<pre>${outputData.body.innerHTML.slice(2730,5500)}</pre>`
    //console.log(outputData.body.innerHTML.slice(0,5500))
};
//
function parser(){
    //
   fetch(url) //
        .then((response) => { // Возвр. промис
            //console.log(response)
            document.querySelector('.temp').innerHTML = `Status: ${response.status}<br>
                                                         StatusTexe: ${response.statusText}<br>
                                                         Type: ${response.type}<br>
                                                         URL: <a href="${response.url}">${response.url}</a>`
            response.text() // Возвр. промис
                .then(data => 
                    {
                        let parser = new DOMParser();  
                        let doc = parser.parseFromString(data, "text/html");
                        return handlerObj(doc)  // возвр. объект и пкредаем в ф-цию handlerObj
                    })
            })
        .catch(error => { //error
            console.log(error)
            document.querySelector('.name').innerHTML = error
        });     // fetch        
};  // parser
//
let count = 0
setInterval(() =>{
    /*
       * Обновляем погодные данные на странице
       * Выполняется кажд. 30 мин
    */
        parser()
        console.log(`Кол-во запусков: ${++count}`);
    //

},1800000);
//
parser();
//