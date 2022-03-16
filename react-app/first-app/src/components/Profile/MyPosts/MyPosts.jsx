import mp from "./MyPosts.module.css";
import Post from "./Post/Post.jsx";
//
const MyPosts = () => {
    return (
        <div className={mp.item}>
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