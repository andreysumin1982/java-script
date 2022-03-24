import m from './Message.module.css';  
//
const Message = (props) => {
  //
  return (
      <div className={m.message}>{props.message}</div>
    );
};
  //
export default Message;