import n from "./Nav.module.css";
import defaultStyle from '../../DefaultStyle/DefaultStyle.module.css'

// Создаем компоненту Nav
const Nav = () => {
    return (
        <nav className={`${defaultStyle.defaultStyle} ${n.nav}`}>
            <div className={n.item}>
                <a className={n.links} href="/profile">Profile</a>
            </div>
            <div className={n.item}>
                <a className={n.links} href="/dialogs">Messages</a>
            </div>
            <div className={n.item}>
                <a className={n.links} href="/news">News</a>
            </div>
            <div className={n.item}>
                <a className={n.links} href="/music">Music</a>
            </div>
            <div className={n.item}>
                <a className={n.links} href="/settings">Setting</a>
            </div>
        </nav>
    );
};
//
export default Nav;