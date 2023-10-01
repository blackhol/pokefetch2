import React, { useState } from "react";
import { useAuth } from "../../Config/AuthContext";
import Button from "../Button/Button";
import InputField from "../InputField/InputField";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { currentUser, login, logout } = useAuth();

    const handleLogin = async () => {
        try {
            await login(email, password);
        } catch (error) {
            console.log("Login Error:", error.message);
        }
    };

    const handleLogout = async () => {
        try {
            await logout();
        } catch (error) {
            console.log("Logout Error:", error.message);
        }
    };

    return (
        <div>
            {currentUser ? (
                <div>
                    <h2>Welcome, {currentUser.email}!</h2>
                    <Button onClickFunction={handleLogout} text={"Logout"}></Button>
                </div>
            ) : (
                <div>
                    <h2>Login</h2>
                    <InputField
                        type={"email"}
                        value={email}
                        label={"Email"}
                        placeholder={"Email"}
                        onChange={(e) => setEmail(e.target.value)}>
                    </InputField>
                    <InputField
                        type={"password"}
                        value={password}
                        label={"Password"}
                        placeholder={"Password"}
                        onChange={(e) => setPassword(e.target.value)}>
                    </InputField>
                    <Button onClickFunction={handleLogin} text={"Login"}></Button>
                    <Button URLlink={"http://localhost:3000/Register"} text={"Register"}></Button>
                </div>
            )}
        </div>
    );
}

export default Login;
