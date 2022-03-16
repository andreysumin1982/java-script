import post from "./Post.module.css";
//
const Post = () =>{
    return(
        <div className={post.item}>
            <img src="https://demotivation.ru/wp-content/uploads/2020/11/53c0eb8812a6bc6461377c31502ae040.jpg"></img>
                post1
            <div>
                <span>like</span>
            </div>
        </div>
    );
};
//
export default Post;