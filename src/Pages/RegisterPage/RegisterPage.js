import React, { useState } from "react";
import { useAuth } from "../../Context/AuthContext";
import Button from "../../Components/Button/Button";
import InputField from "../../Components/InputField/InputField";
import LoadingScreen from "../../Components/LoadingScreen/LoadingScreen";

function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { register} = useAuth();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [message,setMessage] = useState("")

    const handleRegister = async () => {
        try {
            setLoading(true);
            setMessage("");
            setError("");
            await register(email, password);
            setMessage("Registration success")
        } catch (error) {
            setError("Registration Error: " + error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <div>
                <h2>Welcome</h2>
            </div>
            <div>
                <h2>Register</h2>
                <InputField
                    type={"email"}
                    value={email}
                    label={"Email"}
                    placeholder={"Email"}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <InputField
                    type={"password"}
                    value={password}
                    label={"Password"}
                    placeholder={"Password"}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button onClickFunction={handleRegister} text={"Register"} />
                {loading && <LoadingScreen />}
                {error && <p>{error}</p>}
                {message &&<p>{message}</p>}
            </div>
        </div>
    );
}

export default Register;
