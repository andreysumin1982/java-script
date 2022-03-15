/* */
let url = 'https://jsonplaceholder.typicode.com/users'
/* ajax-request */
function ajaxRequest(){
    const promise = axios(url)
    return promise
}