import d from"./Dialogs.module.css"; // Импортируем модуль css
import defaultStyle from '../../DefaultStyle/DefaultStyle.module.css'

// Создаем компоненту Dialogs
const Dialogs = () => {
    return (
          // Использование нескольких классов css
      <div className={`${defaultStyle.defaultStyle} ${d.dialogs}`}>
        <div className="dialogs_item">
          <div className="dialog">
            *  Dialogs1 *
          </div>
          <div className="dialog">
            *  Dialogs2 *
          </div>
          <div className="dialog">
            *  Dialogs3 *
          </div>
          <div className="dialog">
            *  Dialogs4 *
          </div>
          <div className="dialog">
            *  Dialogs5 *
          </div>
        </div>
        <div className="messages">
          <div className="message">Hello</div>
          <div className="message">By</div>
          <div className="message">Go</div>
          <div className="message">de</div>
          <div className="message">Br</div>
        </div>
      </div>
      

    );
};
//
export default Dialogs;