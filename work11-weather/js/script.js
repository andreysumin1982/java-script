/* Events */
//
const url = 'https://wttr.in/'
const url2 = 'https://jsonplaceholder.typicode.com/users'
//
datasetHTML = []
//
cities = [
    'Омск',
    'Калининград',
    'Челябинск',
    'Владивосток',
    'Красноярск',
    'Москва',
    'Екатеринбург'
]
//
function make_headers(){
   let headers = {
        'Accept-Language' : 'ru'
        }
    return headers
}
//
function make_url(city){
    return `${url}${city}`
}
//
function make_parameters(){
    let params = {
        'format': 2,  //погода одной строкой
        'M': ''  // скорость ветра в "м/с"
     }
    return params
}
//
function processData(outputData){
    outputData.forEach(element => {
        console.log(element[0])
    });    

}
//
fetch(make_url('Санкт-Петербург'), make_parameters()) // Возвр. промис
        .then((response) => {
            console.log(response)
            response.text() //Возвр. промис
                .then(data => 
                    {
                        //console.log(data)
                        datasetHTML.push(data)
                        processData(datasetHTML) // 
                    })
        })        
// Рекурсия
function getProp(o) {
    for(var prop in o) {
        if(typeof(o[prop]) === 'object') {
            getProp(o[prop]);
        } else {
            console.log('Finite value: ',o[prop])
        }
    }
}
//
function func(arr) {
	for (let elem of arr) {
		if (typeof elem == 'object') {
			func(elem);
		} else {
			console.log(elem);
		}
	}
}
//func([1, [2, 7, 8], [3, 4, [5, [6, 7]]]]);
//
function rec(parent){
    
}
//
let data = document.querySelector('html').children
//console.log(data)
function recur(parent){
    let data = document.querySelector(parent).children
    console.log(typeof(data))
    for(let elem in data){
        console.log(elem)
    }
}
//
recur('html')