import h from "./Header.module.css";
//import defaultStyle from '../../DefaultStyle/DefaultStyle.module.css'

// Создаем компоненту Header
const Header = () =>{
    return (
        <header className={`${h.header}`}>
            <div className={`${h.contentImg1}`}></div>
        </header>
    );
};
//
export default Header;