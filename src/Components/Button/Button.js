import "./Button.css";
import { Link } from "react-router-dom";

function Button({text, URLlink, onClickFunction, buttonType, className }) {
    if (buttonType === "submit") {
        // Render a standard button element for form submission
        return (
            <button className={className} type="submit" onClick={onClickFunction}>
                {text}
            </button>
        );
    } else {
        // Render a Link button for navigation
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
