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
            
            <Post />
            <Post />
            <Post />
        </div>
    );
}
//
export default MyPosts;