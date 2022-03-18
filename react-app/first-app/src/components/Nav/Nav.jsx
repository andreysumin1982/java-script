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
                <a href="/news">News</a>
            </div>
            <div className={n.item}>
                <a href="/music">Music</a>
            </div>
            <div className={n.item}>
                <a href="/settings">Setting</a>
            </div>
        </nav>
    );
};
//
export default Nav;