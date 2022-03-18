import Post from "./Post/Post.jsx";
import mp from "./MyPosts.module.css";
import defaultStyle from '../../../DefaultStyle/DefaultStyle.module.css'
//
const MyPosts = () => {
    return (
        <div className={`${defaultStyle.defaultStyle} ${mp.item}`}>
            Мои посты
            <div>
                <textarea></textarea>
                <button>Add</button>
            </div>
            
            <Post message = 'dsfgadfgadfg'/>
            <Post message = 'вафвафвамфваымфыва'/>
            <Post message = 'tzd    asdasdas'/>
        </div>
    );
}
//
export default MyPosts;