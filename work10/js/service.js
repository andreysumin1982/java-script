/*Создание ajax-запросов GET/POST, промисы */
//
//
let urlGetTasks =    'https://jsonplaceholder.typicode.com/posts';
let urlCreateTasks = 'https://jsonplaceholder.typicode.com/posts';
//
//Создаем ф-цию getTasks. Показываем таски
function getTasks(){
    const promise = axios.get(urlGetTasks); // Получаем промис
    return promise; // отдаем промис
}; 
//Ф-ция createTasks. Создаем таски
function createTasks(id, title, body){
    const promise = axios.post(urlCreateTasks, {
        
            userId: id,
            title : title,
            body: body,
        });
        
    
    return promise
}