import React, { useState } from "react";
import { useAuth } from "../../Context/AuthContext";
import Button from "../Button/Button";
import InputField from "../InputField/InputField";
import LoadingScreen from "../LoadingScreen/LoadingScreen";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { currentUser, login, logout } = useAuth();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleLogin = async () => {
        try {
            setLoading(true);
            await login(email, password);
        } catch (error) {
            setError("Login failed. Please check your email and password.");
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = async () => {
        try {
            setLoading(true);
            await logout();
        } catch (error) {
            console.log("Logout Error:", error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            {loading ? (
                <LoadingScreen />
            ) : currentUser ? (
                <div>
                    <h2>Welcome, {currentUser.email}!</h2>
                    <Button onClickFunction={handleLogout} text={"Logout"}></Button>
                </div>
            ) : (
                <div>
                    <h2>Login</h2>
                    {error && <p style={{ color: "red" }}>{error}</p>}
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
