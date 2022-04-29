/* Events */
const url = 'https://wttr.in/'
//
request_headers = {
    'Accept-Language' : 'ru'
}
//
let weather_parameters = {
    'u': '',
    '0': '',
    'M': '',
    'T': ''
}
//
fetch(url,weather_parameters, request_headers)
    .then(response => response.text())
    .then(data => {
        console.log(data)
        document.querySelector('.date').innerHTML=data
    })
    
        