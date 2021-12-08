/*Создание ajax-запросов GET/POST, промисы */
//
//
let urlGetTasks = 'https://jsonplaceholder.typicode.com/posts';
//
//Создаем ф-цию getTasks. Показываем таски
function getTasks(){
    const promise = axios.get(urlGetTasks);
        promise.then((response)=>{
            //console.log(response)
            return response.data
        })
}; 