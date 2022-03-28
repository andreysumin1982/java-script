import f from "./Friends.module.css";
import defaultStyle from '../../../DefaultStyle/DefaultStyle.module.css'
// NavLink - роутинг без перезагрузки страницы
import { NavLink } from "react-router-dom";

// Создаем компоненту Nav
const Friends = (props) => {
   
    //
    return (
        
        <div className={f.friends}>
            {props.name}
        </div>

    );
};
//
export default Friends;