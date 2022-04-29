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
        console.log(element)
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

// Обход DOM дерева
let parent = document.documentElement
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
recur(parent)