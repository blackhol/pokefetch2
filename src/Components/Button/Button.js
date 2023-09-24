import react from 'react'
import "./Button.css";

function Button({color, text, URLlink}) {
    return (
        <a href={URLlink}>
            <button className={color}>{text}</button>
        </a>
    )

}

export default Button;