import di from './DialogItem.module.css';  
import defaultStyle from '../../../DefaultStyle/DefaultStyle.module.css'
import { NavLink } from "react-router-dom";
//
const DialogItems = (props) =>{
    let path = "/dialogs/" + props.id  
    let name = props.name  
    //
    return (
      <div className={di.dialog + ' ' + di.active}>
        <NavLink to={path}>{name}</NavLink>
      </div>
    );
  };
  //
export default DialogItems;