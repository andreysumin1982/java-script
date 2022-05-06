/* Events */
//
const url = 'https://wttr.in/'
const url2 = 'https://jsonplaceholder.typicode.com/users'
const url3 = 'https://news.ycombinator.com/'

//
datasetHTML = []
//
function make_url(city){
    return `${url}${city}`
}
//
function make_parameters(){
    let params = {
        'format': 2,  //погода одной строкой
        'M': '',  // скорость ветра в "м/с"
        'lang': 'ru'
     }
    return params
}
//
function parser(){
    //
   fetch(make_url('Saint Petersburg'), make_parameters())
        .then((response) => { // Возвр. промис
            //console.log(response)
            document.querySelector('.temp').innerHTML = `Status: ${response.status}<br>
                                                         StatusTexe: ${response.statusText}<br>
                                                         Type: ${response.type}<br>
                                                         URL: <a href="${response.url}">${response.url}</a>`
            response.text() // Возвр. промис
                .then(data => 
                    {
                        function getDate(){
                            let date1 = new Date
                                d = String(date1.getDate())
                                m = String(date1.getMonth() + 1)
                                y = String(date1.getFullYear())
                            return d+'-'+m+'-'+y;
                        }
                        //
                        let parser = new DOMParser();  
                        let doc = parser.parseFromString(data, "text/html");
                        //console.log(doc.body.innerHTML.slice(0,450))         
                        document.querySelector('.date').innerHTML = `Дата: ${getDate()} ${parseInt( Date.now()/1000)}`
                        document.querySelector('.name').innerHTML = doc.body.innerHTML.slice(0,440)
                    })
            })
        .catch(error => {
            console.log(error)
            document.querySelector('.name').innerHTML = error
        }); // fetch        
};// parser
//
let count = 0
setInterval(() =>{
    /*
        Обновляем погодные данные на странице
        Выполняется кажд. 30 мин
    */
        parser()
        console.log(`Число запусков: ${count++}`);
    //

},180000);
//
parser()

//---------------------------------------------------------------------------
// Рекурсия
function func(arr) {
	for (let elem of arr) {
		if (typeof elem == 'object') {
			func(elem);
		} else {
			console.log(elem);
		}
	}
}
//
// Обход DOM дерева
let parent = document.documentElement // html
function recur(par){
    if (par.children.length == 0){
        console.log(par)
        return
    }
    else {
        for (let item of par.children){
            if (item.children.length != 0){
                recur(item)
            }
            else console.log(item)
        }
    }
}
//recur(parent)