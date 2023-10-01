import React, { useState } from "react";
import { useAuth } from "../Config/AuthContext";
import Button from "../Components/Button/Button";
import InputField from "../Components/InputField/InputField";

function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { currentUser, register, logout } = useAuth();

    const handleRegister = async () => {
        try {
            await register(email, password);
            // If successful, you can navigate to another page or display a success message.
        } catch (error) {
            console.log("Registration Error:", error.message);
        }
    };

    const handleLogout = async () => {
        try {
            await logout();
            // If successful, you can navigate to another page or display a success message.
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
                    <h2>Register</h2>
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
                    <Button onClickFunction={handleRegister} text={"Register"}></Button>
                </div>
            )}
        </div>
    );
}

export default Register;
