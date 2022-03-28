import Friends from "./Friends/Friends";
import n from "./Nav.module.css";
import defaultStyle from '../../DefaultStyle/DefaultStyle.module.css'
// NavLink - роутинг без перезагрузки страницы
import { NavLink } from "react-router-dom";

// Создаем компоненту Nav
const Nav = (props) => {
    
    // протаскиваем друзей
    let friendsElement = props.friends.map(f => <Friends name = {f.name}/>)
    //
    return (
        <nav className={`${defaultStyle.defaultStyle} ${n.nav}`}>
            <div>
                <NavLink className={n.links} to="/profile">Profile</NavLink>
            </div>
            <div>
                <NavLink className={n.links} to="/dialogs">Messages</NavLink>
            </div>
            <div>
                <NavLink className={n.links} to="/news">News</NavLink>
            </div>
            <div>
                <NavLink className={n.links} to="/music">Music</NavLink>
            </div>
            <div className={n.linkSettings}>
                <NavLink className={n.links} to="/settings">Settings</NavLink>
            </div>
            <div className={n.friends}>
                <h1 className={n.h1}>Friends</h1>
                <div className={n.friendsName}>
                    {friendsElement}                  
                </div>
            </div>
        </nav>
    );
};
//
export default Nav;