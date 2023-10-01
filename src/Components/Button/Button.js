import "./Button.css";

function Button({color, text, URLlink, onClickFunction, buttonType, className}) {
    return (
        <a className={className} type={buttonType} onClick={onClickFunction} href={URLlink}>
            <button className={color}>{text}</button>
        </a>
    )

}

export default Button;