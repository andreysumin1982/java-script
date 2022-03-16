import Like from "../Like/Like.jsx"; // Подключаем лайки
import post from "./Post.module.css";
//
const Post = (props) =>{ // Используем props
    return(
        <div className={post.item}>
            <img src="https://demotivation.ru/wp-content/uploads/2020/11/53c0eb8812a6bc6461377c31502ae040.jpg"></img>
                {props.message}
                <Like />
        </div>
    );
};
//
export default Post;