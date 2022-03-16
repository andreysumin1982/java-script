import p from"./Profile.module.css";

// Создаем компоненту Profile
const Profile = () => {
    return (
        <div className={p.content}>
            <div>
                <img src='https://img3.goodfon.ru/original/1920x1080/c/80/valentina-litso-volosy-figura-sportzal-zal-sportivnyi-stil-1.jpg'></img>
            </div>
            <div>
                Ава + description
            </div>

            <div>
                Мои посты
                <div>
                    Новые посты
                </div>
                <div className="posts">
                    <div className={p.item}>
                        post1
                    </div>
                    <div>
                        post2
                    </div>
                </div>
            </div>

        </div>
    );
};
//
export default Profile;