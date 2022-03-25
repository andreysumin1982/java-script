import Post from "./Post/Post.jsx";
import mp from "./MyPosts.module.css";
import defaultStyle from '../../../DefaultStyle/DefaultStyle.module.css'
//
const MyPosts = (props) => {

    //Перебираем массив объектов получ. с сервака и вытаскиваем данн. в новый массив 
    let postsElements = props.postsData.map(p => <Post message = {p.message}/>)
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