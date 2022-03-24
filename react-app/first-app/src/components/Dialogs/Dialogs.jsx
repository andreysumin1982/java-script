import d from"./Dialogs.module.css"; // Импортируем модуль css
import defaultStyle from '../../DefaultStyle/DefaultStyle.module.css'
import { NavLink } from "react-router-dom";

// Создаем компонены DialogItems, Message
//
const DialogItems = (props) =>{
  let path = "/dialogs/" + props.id  
  let name = props.name  
  //
  return (
    <div className={d.dialog + ' ' + d.active}>
      <NavLink to={path}>{name}</NavLink>
    </div>
  );
};
//
const Message = (props) => {
  //
  return (
      <div className={d.message}>{props.message}</div>
    );
};

// Создаем компоненту Dialogs и подключаем к ней компоненты DialogItems, Message
const Dialogs = () => {
  
  // "Получили данные с сервера"
  let dialogsData = [
    {id: 1, name: 'Andrey'},
    {id: 2, name: 'Timur'},
    {id: 3, name: 'Evgen'},
    {id: 4, name: 'Kostya'},
    {id: 5, name: 'Alex'}
  ];
  let messagesData = [
    {id: 1, message: 'Hello'},
    {id: 2, message: 'Bla'},
    {id: 3, message: 'Ept'},
    {id: 4, message: 'Hi'},
    {id: 5, message: 'Help'}
  ];
  
  // Перебираем массивы объектов получ. с сервака и вытаскиваем данн. в новые массивы 
  let dialogsElement = dialogsData.map(d => <DialogItems name = {d.name} id={d.id}/>);
  let messagesElement = messagesData.map(m => <Message message = {m.message}/>);
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