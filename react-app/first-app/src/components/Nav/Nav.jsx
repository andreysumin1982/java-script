import n from "./Nav.module.css";
import defaultStyle from '../../DefaultStyle/DefaultStyle.module.css'
// NavLink - роутинг без перезагрузки страницы
import { NavLink } from "react-router-dom";

// Создаем компоненту Nav
const Nav = () => {
    return (
        <nav className={`${defaultStyle.defaultStyle} ${n.nav}`}>
            <div className={n.item}>
                <NavLink className={n.links} to="/profile">Profile</NavLink>
            </div>
            <div className={n.item}>
                <NavLink className={n.links} to="/dialogs">Messages</NavLink>
            </div>
            <div className={n.item}>
                <NavLink className={n.links} to="/news">News</NavLink>
            </div>
            <div className={n.item}>
                <NavLink className={n.links} to="/music">Music</NavLink>
            </div>
            <div className={n.item}>
                <NavLink className={n.links} to="/settings">Setting</NavLink>
            </div>
        </nav>
    );
};
//
export default Nav;