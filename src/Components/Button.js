import react from 'react'
import "..//Styles/Button.css";

function Button({ color , text }){
    return <button className={color}>{text}</button>

}

export default Button;