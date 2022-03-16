import MyPosts from "./MyPosts/MyPosts.jsx"; // Импортируем MyPosts.jsx
import p from"./Profile.module.css"; // Импортируем модель css

// Создаем компоненту Profile
const Profile = () => {
    return (
        <div className={p.content}>
            <div>
                <img className={p.contentImg} src='https://img3.goodfon.ru/original/1920x1080/c/80/valentina-litso-volosy-figura-sportzal-zal-sportivnyi-stil-1.jpg'></img>
            </div>
            <div>
                Ава + description
            </div>

            <MyPosts />
        </div>
    );
};
//
export default Profile;