import n from"./News.module.css"; // Импортируем модуль css
import defaultStyle from '../../DefaultStyle/DefaultStyle.module.css'

// Создаем компоненту News
const News = () => {
    return (
        <div className={`${defaultStyle.defaultStyle} ${n.content}`}>
          *  News *
          *  News *
          *  News *
          *  News *
        </div>
    );
};
//
export default News;