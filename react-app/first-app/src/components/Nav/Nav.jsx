import n from "./Nav.module.css";

// Создаем компоненту Nav
const Nav = () => {
    return (
        <nav className={n.nav}>
            <div className={n.item}>
                <a href="/profile">Profile</a>
            </div>
            <div className={n.item}>
                <a href="/dialogs">Messages</a>
            </div>
            <div className={n.item}>
                <a>News</a>
            </div>
            <div className={n.item}>
                <a>Music</a>
            </div>
            <div className={n.item}>
                <a>Setting</a>
            </div>
        </nav>
    );
};
//
export default Nav;