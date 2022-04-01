//import React from 'react';
//import ReactDOM from 'react-dom';
//import App from './App';
import state from './redux/state'; // Импортируем ф-цию addPost
import './index.css';
import reportWebVitals from './reportWebVitals';
import {rerenderEntireTree} from './render'; // Импортируем ф-цию для перерисовки контента.

// Оборачиваем в ф-цию rerenderEnttireTree
// export let rerenderEntireTree = () => {
//   ReactDOM.render(
//     <React.StrictMode>
//       {/* Прокидываем (все) в App */}
//       <App state={state} addPost={addPost} />
//     </React.StrictMode>,
//     document.getElementById('root')
//   );
// };

// Вызываем
rerenderEntireTree(state);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
