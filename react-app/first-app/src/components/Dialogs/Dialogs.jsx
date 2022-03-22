import d from"./Dialogs.module.css"; // Импортируем модуль css
import defaultStyle from '../../DefaultStyle/DefaultStyle.module.css'
import { NavLink } from "react-router-dom";

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
  return (
      <div className={d.message}>{props.message}</div>
    );
};

// Создаем компоненту Dialogs
const Dialogs = () => {
    return (
          // Использование нескольких классов css
      <div className={`${defaultStyle.defaultStyle} ${d.dialogs}`}>
        <div className={d.dialogsItems}>
          <DialogItems name = "Andrey" id="1"/>
          <DialogItems name = "Timur" id="2"/>
          <DialogItems name = "Evgen" id="3"/>
          <DialogItems name = "Kostya" id="4"/>
          <DialogItems name = "Alex" id="5"/>
        </div>
        <div className={d.messages}>
          <Message message = "Hello"/>
          <Message message = "Bla"/>
          <Message message = "Ept"/>
          <Message message = "Hi"/>
        </div>
      </div>
    
    );
};
//
export default Dialogs;