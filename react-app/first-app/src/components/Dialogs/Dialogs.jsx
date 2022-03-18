import d from"./Dialogs.module.css"; // Импортируем модуль css

<<<<<<< HEAD
// Создаем компоненту Profile
const Dialogs = () => {
    return (
        <div className={d.content}>
            Диалоги
=======
// Создаем компоненту Dialogs
const Dialogs = () => {
    return (
          // Использование нескольких классов css
        <div className={`${d.content} ${d.fontContent}`}> 
          *  Dialogs *
>>>>>>> b34713586174133c3245ab202dd00bccadec442e
        </div>
    );
};
//
export default Dialogs;