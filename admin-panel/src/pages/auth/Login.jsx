import { useState } from "react";
import { useNotify } from "react-admin";
import { Link } from "react-router-dom";
import { useAuth } from "./AuthProvider";
import { useNavigate } from "react-router-dom";
const api_url = import.meta.env.VITE_JSON_SERVER_URL;


const Login = () => {
    const {setPermissions} = useAuth();
    const navigate = useNavigate()
    const [credentials, setCredentials] = useState({
        email: "",
        password: ""
    });
    const notify = useNotify();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`${api_url}/auth/login`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({...credentials})
        }).then(async (res)=>{
            if(res.status == 200){
                const {token, role, permissions} = await res.json()
                localStorage.setItem("auth", JSON.stringify({token, role, permissions}))
                setPermissions(permissions)
                notify("Login Successfull");
                navigate("/")
            }else{
                notify("Invalid email or password")
                throw new Error("Invalid email or password")
            }
        }).catch((err)=>{
            notify("Invalid email or password")
            throw new Error(err)
        })
        }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                placeholder="Email"
                value={credentials.email}
                onChange={(e) => setCredentials({
                    ...credentials, email:
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