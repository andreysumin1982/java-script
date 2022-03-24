import Post from "./Post/Post.jsx";
import mp from "./MyPosts.module.css";
import defaultStyle from '../../../DefaultStyle/DefaultStyle.module.css'
//
const MyPosts = (props) => {
    
    //"Получили данные с сервера"
    let postsData = [
        {id : 1, message: "Объект Console служит для доступа к средствам отладки браузера (например, Web Console (Веб-консоль) в Firefox). Работа с ним отличается в разных браузерах, но эти методы и свойства по факту поддерживаются всеми браузерами."},
        {id : 2, message: "Объект Console служит для доступа к средствам отладки браузера (например, Web Console (Веб-консоль) в Firefox). Работа с ним отличается в разных браузерах, но эти методы и свойства по факту поддерживаются всеми браузерами."},
        {id : 3, message: "Объект Console служит для доступа к средствам отладки браузера (например, Web Console (Веб-консоль) в Firefox). Работа с ним отличается в разных браузерах, но эти методы и свойства по факту поддерживаются всеми браузерами."},
        {id : 4, message: "Объект Console служит для доступа к средствам отладки браузера (например, Web Console (Веб-консоль) в Firefox). Работа с ним отличается в разных браузерах, но эти методы и свойства по факту поддерживаются всеми браузерами."},
        {id : 5, message: "Объект Console служит для доступа к средствам отладки браузера (например, Web Console (Веб-консоль) в Firefox). Работа с ним отличается в разных браузерах, но эти методы и свойства по факту поддерживаются всеми браузерами."}
    ]
    //Перебираем массив объектов получ. с сервака и вытаскиваем данн. в новый массив 
    let postsElements = postsData.map(p => <Post message = {p.message}/>)
    //
    return (
        <div className={`${defaultStyle.defaultStyle} ${mp.item}`}>
            * Мои посты *
            <div>
                <textarea></textarea>
                <button>Add</button>
            </div>
                {postsElements}
        </div>
    );
};
//
export default MyPosts;