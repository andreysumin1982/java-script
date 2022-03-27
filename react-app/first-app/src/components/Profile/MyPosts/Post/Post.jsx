import Like from "../Like/Like.jsx"; // Подключаем лайки
import p from "./Post.module.css";
//
const Post = (props) =>{ // Используем props
    // debugger;
    return(
        <div className={p.item}>
            <div>
                <img src="https://demotivation.ru/wp-content/uploads/2020/11/53c0eb8812a6bc6461377c31502ae040.jpg"></img>
                {props.message}
            </div>
            <Like />
        </div>
    );
};
//
export default Post;