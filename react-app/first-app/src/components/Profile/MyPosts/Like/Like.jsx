import l from "./Like.module.css";
//
const Like = () => {
    let count = Math.floor(Math.random() * 101)
    //console.log('sdfsdfsd')
    return (
        <div className={l.item}>
          {`${count}`}
        </div>
    );
}
//
export default Like;