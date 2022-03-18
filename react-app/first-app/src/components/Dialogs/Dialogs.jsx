import d from"./Dialogs.module.css"; // Импортируем модуль css
import defaultStyle from '../../DefaultStyle/DefaultStyle.module.css'

// Создаем компоненту Dialogs
const Dialogs = () => {
    return (
          // Использование нескольких классов css
        <div className={`${defaultStyle.defaultStyle} ${d.content}`}> 
          *  Dialogs *
        </div>
    );
};
//
export default Dialogs;