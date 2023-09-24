import React, { useState } from "react";
import { useAuth } from "../Config/AuthContext";

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
                    <button onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <div>
                    <h2>Register</h2>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button onClick={handleRegister}>Register</button>
                </div>
            )}
        </div>
    );
}

export default Register;
