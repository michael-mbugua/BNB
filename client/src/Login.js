import React ,{useState}from 'react'
import './Login.css'
import { useHistory } from "react-router-dom";

function Login({user,onLogin}) {
    const history= useHistory()
    const [name,setName] =useState("")
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState([]);
    function handleSubmit(e){
        e.preventDefault();
        setIsLoading(true)
        fetch("http://localhost:3000/login",{
            method: "POST",
            headers: {
                "content-Type": "application/json",
            },body: JSON.stringify({name}),
        }).then((r) => {
            setIsLoading(false);
            if (r.ok) {
                r.json().then((user) => {
                onLogin(user);
                history.push("/home");
                console.log("success",user)
                });
            } else {
            r.json().then((err) => {
                setErrors(err.errors);
                });
            }
            });
    }
    
    return (
    <form onSubmit={handleSubmit}>
        <h3>Login with Username </h3>
        <div className="form-group">
            <h4>Username</h4>
            <input type="text" className="form-control"
            value={name} 
            onChange={(e)=> setName(e.target.value)}
            placeholder="Enter Your Name"/>
        </div>
        
        <button type="submit" className="btn btn-primary">{isLoading ? "Log in" : "Login"}</button>
    </form>
    )
}

export default Login