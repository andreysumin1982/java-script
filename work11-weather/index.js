/* Events */
//
const url = 'https://wttr.in/%D0%A1%D0%B0%D0%BD%D0%BA%D1%82-%D0%9F%D0%B5%D1%82%D0%B5%D1%80%D0%B1%D1%83%D1%80%D0%B3'
const url2 = 'https://jsonplaceholder.typicode.com/users'
const url3 = 'https://news.ycombinator.com/'
//
const axios = require('axios');
const cheerio = require('cheerio');
const { data } = require('cheerio/lib/api/attributes');
const { slice } = require('cheerio/lib/api/traversing');
//
datasetHTML = []
//
//
function make_url(city){
    return `${url}${city}`
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
async function parse(){
    /**
        * * асинхронная ф-ция parse
    */
    const getHTML = async(url, params=NaN) =>{
        const { data } = await axios.get(url, params=NaN)
            return cheerio.load(data)
    };
    //
    const $ = await getHTML(url, make_parameters())
    //
    let dataset = []
    let re = /[^\w\d\(\)]/g
    let temp = $('body > pre:nth-child(1)').text().slice(0,150).split('\n')
    temp.forEach(element => {
        dataset.push(element.replace(re, ''))
    });
    console.log(dataset)
}; //parse
//
parse()

// let re = /[^\w\d\(\)]/g
// let d = ['Weather report: Saint Petersburg',
// '',
// '      \\   /     Sunny',
// '       .-.      +10(8) °C      ',
// '    ― (   ) ―   ↑ 11 km/h      ',
// '       `-’      10 km         ']
// //
// for (let item of d){
//     console.log(item.replace(re, ''))
// }