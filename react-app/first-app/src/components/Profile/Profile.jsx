import MyPosts from "./MyPosts/MyPosts.jsx"; // Импортируем MyPosts.jsx
import ProfileInfo from "./ProfileInfo/ProfileInfo.jsx"; 
import p from"./Profile.module.css"; // Импортируем модуль css
import defaultStyle from '../../DefaultStyle/DefaultStyle.module.css'


// Создаем компоненту Profile
const Profile = (props) => {
    //
    return (
        <div className={`${defaultStyle.defaultStyle} ${p.content} ${p.contentImg}`}>
            <ProfileInfo/>
            <MyPosts postsData={props.postsData} addPost={props.addPost}/> 
        </div>
    );
};
//
export default Profile;