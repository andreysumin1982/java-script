import d from"./Dialogs.module.css"; // Импортируем модуль css
import defaultStyle from '../../DefaultStyle/DefaultStyle.module.css'

// Создаем компоненту Dialogs
const Dialogs = () => {
    return (
          // Использование нескольких классов css
      <div className={`${defaultStyle.defaultStyle} ${d.dialogs}`}>
        <div className={d.dialogsItems}>
          <div className={d.dialog + ' ' + d.active}>
            *  Dialogs1 *
          </div>
          <div className={d.dialog}>
            *  Dialogs2 *
          </div>
          <div className={d.dialog}>
            *  Dialogs3 *
          </div>
          <div className={d.dialog}>
            *  Dialogs4 *
          </div>
          <div className={d.dialog}>
            *  Dialogs5 *
          </div>
        </div>
        <div className={d.messages}>
          <div className={d.message}>Hello</div>
          <div className={d.message}>By</div>
          <div className={d.message}>Go</div>
          <div className={d.message}>de</div>
        </div>
      </div>
      

    );
};
//
export default Dialogs;