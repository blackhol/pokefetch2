import { useState } from "react";
import { useAuth } from "../Config/AuthContext";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { currentUser, login, logout } = useAuth();

    const handleLogin = async () => {
        try {
            await login(email, password);
            // If successful, you can navigate to another page or display a success message.
        } catch (error) {
            console.log("Login Error:", error.message);
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
                    <h2>Login</h2>
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
                    <button onClick={handleLogin}>Login</button>
                </div>
            )}
        </div>
    );
}

export default Login;
