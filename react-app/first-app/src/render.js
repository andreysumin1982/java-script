// Именно index.js выполняет развёртывание React-приложения и 
// во избежание петель (экспорта-импорта) между файлами (index.js <--> state.js), 
// создан render.js с ф-цией rerenderEntireTree для отрисовки App (React-приложения). 
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { addPost }from './redux/state'; // Импортируем ф-цию addPost
import {updateNewPostText} from './redux/state'; // Импортируем ф-цию updateNewPostText
//
// Оборачиваем в ф-цию rerenderEnttireTree
export let rerenderEntireTree = (state) => {
    // Отрисовываем весь контент
    ReactDOM.render(
      <React.StrictMode>
        {/* Прокидываем данные через пропсы в App */}
        <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
      </React.StrictMode>,
      document.getElementById('root')
    );
  };
//