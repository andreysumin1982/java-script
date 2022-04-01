// Импортируем ф-цию для перерисовки контента.
import {rerenderEntireTree} from '../render';

// "Получили данные с сервера"
const state = {
    profilePage: {
        postsData: [
            { id: 1, message: "Объект Console служит для доступа к средствам отладки браузера (например, Web Console (Веб-консоль) в Firefox). Работа с ним отличается в разных браузерах, но эти методы и свойства по факту поддерживаются всеми браузерами." },
            { id: 2, message: "Объект Console служит для доступа к средствам отладки браузера (например, Web Console (Веб-консоль) в Firefox). Работа с ним отличается в разных браузерах, но эти методы и свойства по факту поддерживаются всеми браузерами." },
            { id: 3, message: "Объект Console служит для доступа к средствам отладки браузера (например, Web Console (Веб-консоль) в Firefox). Работа с ним отличается в разных браузерах, но эти методы и свойства по факту поддерживаются всеми браузерами." },
            { id: 4, message: "Объект Console служит для доступа к средствам отладки браузера (например, Web Console (Веб-консоль) в Firefox). Работа с ним отличается в разных браузерах, но эти методы и свойства по факту поддерживаются всеми браузерами." },
            { id: 5, message: "Объект Console служит для доступа к средствам отладки браузера (например, Web Console (Веб-консоль) в Firefox). Работа с ним отличается в разных браузерах, но эти методы и свойства по факту поддерживаются всеми браузерами." }
        ],
    },
    messagesPage: {
        dialogsData: [
            { id: 1, name: 'Andrey' },
            { id: 2, name: 'Timur' },
            { id: 3, name: 'Evgen' },
            { id: 4, name: 'Kostya' },
            { id: 5, name: 'Alex' }
        ],
        messagesData: [
            { id: 1, message: 'Hello' },
            { id: 2, message: 'Bla' },
            { id: 3, message: 'Ept' },
            { id: 4, message: 'Hi' },
            { id: 5, message: 'Help' }
        ],
    },
    friends: [

        { id: 6, name: 'Eva' },
        { id: 7, name: 'Inna' },
        { id: 8, name: 'Klava' },

    ],
    
}
//
export let addPost = (postMessage) =>{
    /* Ф-ция добавляет новые посты в state.profilePage.postsData */
    // Отбираем все id в отдельный массив
    let arrayId = state.profilePage.postsData.map(id => id.id)
    //
    let newPost = { // Создаем новый пост
        id : (arrayId.length)+1, // немерация id 
        message : postMessage 
    }
    // Добавляем новый пост
    state.profilePage.postsData.push(newPost)
    // Перерисовываем 
    rerenderEntireTree(state);
};
//console.log(state.profilePage.postsData);
//
export default state;