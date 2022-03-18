import d from"./Dialogs.module.css"; // Импортируем модуль css

// Создаем компоненту Dialogs
const Dialogs = () => {
    return (
          // Использование нескольких классов css
        <div className={`${d.content} ${d.fontContent}`}> 
          *  Dialogs *
        </div>
    );
};
//
export default Dialogs;