import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//
// "Получили данные с сервера"
let dialogsData = [
  {id: 1, name: 'Andrey'},
  {id: 2, name: 'Timur'},
  {id: 3, name: 'Evgen'},
  {id: 4, name: 'Kostya'},
  {id: 5, name: 'Alex'}
];

let messagesData = [
  {id: 1, message: 'Hello'},
  {id: 2, message: 'Bla'},
  {id: 3, message: 'Ept'},
  {id: 4, message: 'Hi'},
  {id: 5, message: 'Help'}
];

let postsData = [
  {id : 1, message: "Объект Console служит для доступа к средствам отладки браузера (например, Web Console (Веб-консоль) в Firefox). Работа с ним отличается в разных браузерах, но эти методы и свойства по факту поддерживаются всеми браузерами."},
  {id : 2, message: "Объект Console служит для доступа к средствам отладки браузера (например, Web Console (Веб-консоль) в Firefox). Работа с ним отличается в разных браузерах, но эти методы и свойства по факту поддерживаются всеми браузерами."},
  {id : 3, message: "Объект Console служит для доступа к средствам отладки браузера (например, Web Console (Веб-консоль) в Firefox). Работа с ним отличается в разных браузерах, но эти методы и свойства по факту поддерживаются всеми браузерами."},
  {id : 4, message: "Объект Console служит для доступа к средствам отладки браузера (например, Web Console (Веб-консоль) в Firefox). Работа с ним отличается в разных браузерах, но эти методы и свойства по факту поддерживаются всеми браузерами."},
  {id : 5, message: "Объект Console служит для доступа к средствам отладки браузера (например, Web Console (Веб-консоль) в Firefox). Работа с ним отличается в разных браузерах, но эти методы и свойства по факту поддерживаются всеми браузерами."}
]
  //
ReactDOM.render(
  <React.StrictMode>
    <App dialogsData={dialogsData} 
          messagesData={messagesData}
          postsData={postsData} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
