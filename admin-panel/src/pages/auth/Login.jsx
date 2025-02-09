import { useState } from "react";
import { useLogin, useNotify } from "react-admin";
import { Link } from "react-router-dom";


const Login = () => {
    const [credentials, setCredentials] = useState({
        username: "",
        password: ""
    });
    const login = useLogin();
    const notify = useNotify();
    const handleSubmit = (e) => {
        e.preventDefault();
        login(credentials).catch(() => notify("Invalid email or password"));
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                placeholder="Email"
                value={credentials.email}
                onChange={(e) => setCredentials({
                    ...credentials, username:
                        e.target.value
                })}
            />
            <input
                type="password"
                placeholder="Password"
                value={credentials.password}
                onChange={(e) => setCredentials({
                    ...credentials, password:
                        e.target.value
                })}
            />
            <button type="submit">Login</button>
            
            <Link to="/signup"><button type="submit">Signup</button></Link>

        </form>
    );
};
export default Login;