import "./Button.css";
import {Link} from "react-router-dom";
function Button({color, text, URLlink, onClickFunction, buttonType, className}) {
    return(
        <Link to={URLlink}>
            <button className={className} type={buttonType} onClick={onClickFunction}>
                {text}
            </button>
        </Link>
    )
}
export default Button;