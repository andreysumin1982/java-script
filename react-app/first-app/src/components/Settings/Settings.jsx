import s from"./Settings.module.css"; // Импортируем модуль css
import defaultStyle from '../../DefaultStyle/DefaultStyle.module.css'

// Создаем компоненту Settings
const Settings = () => {
    return (
        <div className={`${defaultStyle.defaultStyle} ${s.content}`}>
        -- Settings -- Settings -- Settings -- 
        </div>
    );
};
//
export default Settings;