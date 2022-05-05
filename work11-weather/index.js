//
const cheerio = require('cheerio')
const axios = require('axios')
const fs = require("fs");
//
let url = 'https://wttr.in/'
//
axios.get(url)
    .then(data =>{
        const $ = cheerio.load(data)
        console.log($);
    })
    .catch(error =>{
        console.log(error.toString())
        fs.writeFile("error.log", error.toString(), function(error){
            //
            if(error) throw error; // если возникла ошибка
            console.log("Запись файла завершена. Содержимое файла 'error.log'");
            // let data = fs.readFileSync("hello.txt", "utf8");
            // console.log(data);  // выводим считанные данные
        });
    })