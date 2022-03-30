import React from "react";
import pi from"./ProfileInfo.module.css"; // Импортируем модуль css
import defaultStyle from '../../../DefaultStyle/DefaultStyle.module.css'

// Создаем компоненту Profile
const ProfileInfo = (props) => {
  
    //
    return (
            <div className={`${defaultStyle.defaultStyle}`}>
                <h1 className={pi.content}>Ава + description</h1>
            </div>
    );
};
//
export default ProfileInfo;