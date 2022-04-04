import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import state, { addPost, subscribe } from './redux/state'; // Импортируем state, ф-ции addPost, subscribe
import './index.css';
import reportWebVitals from './reportWebVitals';


// Оборачиваем в ф-цию rerenderEnttireTree
export let rerenderEntireTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      {/* Прокидываем (все) в App */}
      <App state={state} addPost={addPost} />
    </React.StrictMode>,
    document.getElementById('root')
  );
};

// Вызываем
rerenderEntireTree(state);

//Передаем в subscribe ф-цию rerenderEntireTree
subscribe(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
