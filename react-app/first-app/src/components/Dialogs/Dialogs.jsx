import d from"./Dialogs.module.css"; // Импортируем модуль css
import defaultStyle from '../../DefaultStyle/DefaultStyle.module.css'
import DialogItems from "./DialogItem/DialogItem";
import Message from "./Message/Message";

// Создаем компоненту Dialogs и подключаем к ней компоненты DialogItems, Message
const Dialogs = (props) => {
  
  // // "Получили данные с сервера"
  // let messagesData = [
  //   {id: 1, message: 'Hello'},
  //   {id: 2, message: 'Bla'},
  //   {id: 3, message: 'Ept'},
  //   {id: 4, message: 'Hi'},
  //   {id: 5, message: 'Help'}
  // ];
  
  // Перебираем массивы объектов получ. с сервака и вытаскиваем данн. в новые массивы 
  let dialogsElement = props.dialogsData.map(d => <DialogItems name = {d.name} id={d.id}/>);
  let messagesElement = props.messagesData.map(m => <Message message = {m.message}/>);
  //
  return (
          // Использование нескольких классов css
    <div className={`${defaultStyle.defaultStyle} ${d.dialogs}`}>
      <div className={d.dialogsItems}>
        {dialogsElement}
      </div>
      <div className={d.messages}>
        {messagesElement}
      </div>
    </div>
    );
};
//
export default Dialogs;