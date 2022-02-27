//-------------------------------------
/*
let num = prompt('Введи число от 1-10: ','');
let randomNum = Math.floor(Math.random() * 5);
if (num == randomNum){
    confirm('Угадал.')
}
else{
    confirm('No')
}
*/
//-------------------------------------------
/*let num = prompt('Введи число: ');
if (num % 2 == 0){
    let sum = 1;
    for (i of String(num)){
        sum *=Number(i);
        }
    console.log(sum);
}
else{
    let sum = 0;
    for (i of String(num)){
        sum +=Number(i);
        }
    console.log(sum);
}
*/
//------------------------------------------
/*let num = prompt('Введи число:');
if (Number(num)){ // если num число
    let st = '';
    for (let i = 2; i<=10; i++ ){
        if (num % i == 0){
            st = st + `Число делится на ${i}\n`
        }
    }confirm(st);
}
else{
    confirm('Введено Не число, или ничего не введено!');
}
*/
//-----------------------------------------
let elem1 = document.querySelector('.input1');
let form1 = document.forms[0].elements[0].value;
//console.log(form1);

let elem2 = String(document.querySelector('.input2').value);
//console.log(elem2.length);
result = input1.value;
//console.log(result);
//-----Информация о  хост ip порт url--------------------
let inform = {'hostname' : location.hostname, 
            'host': location.host, 
            'port': location.port, 
            'protocol': location.protocol,
            'href' : location.href
        };
console.log(inform['hostname'], 
            inform['host'], 
            inform['port'], 
            inform['protocol'], 
            inform['href']);
//--------------------------------------------------------
let inform2 = {'platform': navigator.platform,
                'version' : navigator.appVersion,
                'cpu': navigator.productSub,
                'online' : navigator.onLine,                               
};
console.log(inform2['version'], 
            inform2['platform'], 
            inform2['cpu'], 
            inform2['online']);

//----------------------------------------------------
let image = document.createElement('img');
image.className = 'image';
image.innerHTML = '<img src="img/cars_zip/car1.jpg">';
document.body.append(image);





































































