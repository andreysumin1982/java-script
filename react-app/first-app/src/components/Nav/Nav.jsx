import n from "./Nav.module.css";

// Создаем компоненту Nav
const Nav = () => {
    return (
        <nav className={n.nav}>
            <div className={n.item}>
<<<<<<< HEAD
                <a href="/profile">Profile</a>
            </div>
            <div className={n.item}>
                <a href="/dialogs">Messages</a>
=======
                <a className={n.links} href="/profile">Profile</a>
            </div>
            <div className={n.item}>
                <a className={n.links} href="/dialogs">Messages</a>
>>>>>>> b34713586174133c3245ab202dd00bccadec442e
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