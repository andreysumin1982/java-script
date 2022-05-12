//
const url = 'https://wttr.in/%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3';
//
function formatTime(){
    //* Ф-ция возвр. время (hh:mm:ss)
    const d = new Date
    const hh = d.getHours().toString().padStart(2, "0");
    const mm = d.getMinutes().toString().padStart(2, "0");
    const ss = d.getSeconds().toString().padStart(2, "0");
    return `Время: ${hh}:${mm}:${ss}`;
}
//
function make_parameters(){
    let params = {
        'format': 2,  //погода одной строкой
        '0':'',
        'M': '',  // скорость ветра в "м/с"
        'lang': 'ru'
     }
    return params
}
//
function formatDate(){
    //* Ф-ция возвр. дату
    const date1 = new Date;
    const d = date1.getDate().toString().padStart(2, "0");
    //
    const m = date1.getMonth().toString();
    const monthTitle = [ 'января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
    const y = date1.getFullYear().toString();
    //
    const day = date1.getDay(); // 0 - 6
    const dayTitle = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
    return `Сегодня: ${dayTitle[day]}, ${d} ${monthTitle[m]} ${y}`;
};
//
function handlerObj(outputData){
    //* обработчик объекта HTMLDocument 
    document.querySelector('.date').innerHTML = `${formatDate()}`
    document.querySelector('.name').innerHTML = `${outputData.body.innerHTML.slice(0,440)}`
    document.querySelector('.description').innerHTML = `<pre>${outputData.body.innerHTML.slice(3124,5550)}</pre>`
    //console.log(outputData.body.innerHTML.slice(0,5500))
};
//
function parser(){
    //
   fetch(url, make_parameters()) //
        .then((response) => { // Возвр. промис
            //console.log(response)
            document.querySelector('.temp').innerHTML = `Status: ${response.status}<br>
                                                         StatusText: ${response.statusText}<br>
                                                         Type: ${response.type}<br>
                                                         URL: <a href="${response.url}">${response.url}</a>`
            response.text() // Возвр. промис
                .then(data => 
                    {
                        let parser = new DOMParser();  
                        let doc = parser.parseFromString(data, "text/html");
                        return handlerObj(doc)  // возвр. объект и передаем в ф-цию handlerObj
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
setInterval(() =>{
    /*
       * Обновляем время на странице
       * Выполняется кажд. 1 сек.
    */  
    document.querySelector('.time').innerHTML = `${formatTime()}`
    //
},1000);
//
parser();
//