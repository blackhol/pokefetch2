import React from "react";
import {useNavigate} from "react-router-dom";

const NotFound = () => {
    const Redirect = useNavigate();
    setTimeout(() => {
        Redirect("/Home")
    }, 3000);

    return (
        <>
            <h1>Page not found | 404</h1>
            <p>you will be redirected in 3 seconds</p>
        </>
    );
};
export default NotFound;