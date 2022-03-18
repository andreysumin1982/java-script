import h from "./Header.module.css";

// Создаем компоненту Header
const Header = () =>{
    return (
        <header className={`${h.header} ${h.fontHeader}`}>
            Header
        </header>
    );
};
//
export default Header;