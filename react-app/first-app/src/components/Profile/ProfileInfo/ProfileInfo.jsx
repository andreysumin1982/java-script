import pi from"./ProfileInfo.module.css"; // Импортируем модуль css
import defaultStyle from '../../../DefaultStyle/DefaultStyle.module.css'

// Создаем компоненту Profile
const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={`${defaultStyle.defaultStyle} ${pi.contentImg}`} src='https://img3.goodfon.ru/original/1920x1080/c/80/valentina-litso-volosy-figura-sportzal-zal-sportivnyi-stil-1.jpg'></img>
            </div>
            <div className={`${defaultStyle.defaultStyle}`}>
                Ава + description
            </div>
        </div>
    );
};
//
export default ProfileInfo;