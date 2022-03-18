import MyPosts from "./MyPosts/MyPosts.jsx"; // Импортируем MyPosts.jsx
import p from"./Profile.module.css"; // Импортируем модуль css
import defaultStyle from '../../DefaultStyle/DefaultStyle.module.css'

// Создаем компоненту Profile
const Profile = () => {
    return (
        <div className={`${defaultStyle.defaultStyle} ${p.content}`}>
            <div>
                <img className={`${defaultStyle.defaultStyle} ${p.contentImg}`} src='https://img3.goodfon.ru/original/1920x1080/c/80/valentina-litso-volosy-figura-sportzal-zal-sportivnyi-stil-1.jpg'></img>
            </div>
            <div className={`${defaultStyle.defaultStyle}`}>
                Ава + description
            </div>

            <MyPosts />
        </div>
    );
};
//
export default Profile;