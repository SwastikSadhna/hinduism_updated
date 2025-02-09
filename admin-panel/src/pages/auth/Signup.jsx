import { useState } from "react";
import { Link } from "react-router-dom";
const api_url = import.meta.env.VITE_JSON_SERVER_URL;
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const [user, setUser] = useState({
        name: null, email: null,
        password: null
    });
    const navigate = useNavigate()
    const handleSignup = async (e) => {
        e.preventDefault();
        await fetch(`${api_url}/auth/signup`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user),
        }).then((res)=>{
            if(res.ok){
                alert("Account created! You can now log in.");
                navigate("/login")
            }
            else if(res.status == 400)
                alert("Email Already Existed");
        }).catch((err)=>{
            alert("Internal server error");
        })
    };
    return (
        <>
        <form onSubmit={handleSignup}>
            <input type="text" placeholder="Name" onChange={(e) =>
                setUser({ ...user, name: e.target.value })} />
            <input type="email" placeholder="Email" onChange={(e) =>
                setUser({ ...user, email: e.target.value })} />
            <input type="password" placeholder="Password" onChange={(e) =>
                setUser({ ...user, password: e.target.value })} />
            <button type="submit">Sign Up</button>
        </form>
        <Link to="/login">Login</Link>
        </>
    );
};
export default Signup;
