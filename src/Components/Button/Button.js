import  "./Button.css";
import { Link } from "react-router-dom";

function Button({text, URLlink, onClickFunction, buttonType, className }) {
    if (buttonType === "submit") {
        return (
            <button className={className} type="submit" onClick={onClickFunction}>
                {text}
            </button>
        );
    } else {
        return (
            <Link to={URLlink}>
                <button className={className} onClick={onClickFunction}>
                    {text}
                </button>
            </Link>
        );
    }
}

export default Button;
