import React from "react";
import d from"./Dialogs.module.css"; // Импортируем модуль css
import defaultStyle from '../../DefaultStyle/DefaultStyle.module.css'
import DialogItems from "./DialogItem/DialogItem";
import Message from "./Message/Message";

// Создаем компоненту Dialogs и подключаем к ней компоненты DialogItems, Message
const Dialogs = (props) => {
  
  // Перебираем массивы объектов получ. с сервака и вытаскиваем данн. в новые массивы 
  let dialogsElement = props.dialogsData.map(d => <DialogItems name = {d.name} id={d.id}/>);
  let messagesElement = props.messagesData.map(m => <Message message = {m.message}/>);
  //
  // Создаем пустую ссылку
  let newMessageElement = React.createRef();
  let sendMessage = ()=>{
    let text = newMessageElement.current.value
    console.log('textarea sendMessage:', text)
  };
  //
  return (
          // Использование нескольких классов css
    <div className={`${defaultStyle.defaultStyle} ${d.dialogs} ${d.contentImg}`}>
      <div>
        {dialogsElement}
      </div>
      <div>
        {messagesElement}
      </div>
      {/*textarea addMessage */}
      <div>
        <textarea className={d.textArea} ref={newMessageElement}></textarea>
        <button onClick={sendMessage}>Отправить</button>
      </div>

    </div>
    );
};
//
export default Dialogs;