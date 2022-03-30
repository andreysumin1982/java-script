import React from "react";
import Post from "./Post/Post.jsx";
import mp from "./MyPosts.module.css";
import defaultStyle from '../../../DefaultStyle/DefaultStyle.module.css'
//
const MyPosts = (props) => {

    //Перебираем массив объектов получ. с сервака и вытаскиваем данн. в новый массив 
    let postsElements = props.postsData.map(p => <Post message = {p.message}/>)
    //
    //Создаем пустую ссылку
    let newPostElement = React.createRef();
    //Созаем ф-цию для вывода сообщения
    let addPost = () =>{
        // Обращение к элементам DOM-дерева в react осуществ. через virtualDOM
        // обращаемся к ref-ссылке и вытаскиваем значение value
        let text = newPostElement.current.value
            // передаем в ф-цию текст из textarea
            props.addPost(text)
            console.log('textarea:', text)
            newPostElement.current.value = ''
    };
    //
    return (
        <div className={`${defaultStyle.defaultStyle} ${mp.item}`}>
            * Мои посты *
            <div>
                {/* Привязываем ref-ссылку на элемент textarea */}
                <textarea ref={newPostElement}></textarea>
                {/*Событие на кнопку */}
                <button onClick={addPost}>Добавить</button>
            </div>
                {postsElements}
        </div>
    );
};
//
export default MyPosts;