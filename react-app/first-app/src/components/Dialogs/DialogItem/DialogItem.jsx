import di from './DialogItem.module.css';  
import { NavLink } from "react-router-dom";
//
const DialogItems = (props) =>{
    let path = "/dialogs/" + props.id  
    let name = props.name  
    //
    return (
      <div className={di.dialogsItems}>
        <NavLink className = {di.links} to={path}>{name}</NavLink>
      </div>
    );
  };
  //
export default DialogItems;