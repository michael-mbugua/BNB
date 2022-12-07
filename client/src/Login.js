import React ,{useState}from 'react'
import './Login.css'

function Login({onLogin}) {
    const [name,setName]=useState("");
    function handleSubmit(e){
        e.preventDefault();
        fetch("/login",{
            method: "POST",
            headers: {
                "content-Type": "application/json",
            },body: JSON.stringify({name}),
        }).then((r)=>{
            if (r.ok) {
                r.json()
                .then((user)=> {
                onLogin(user)});
            }
        })
    }
    
    return (
    <form onSubmit={handleSubmit}>
        <h3>Login with Username </h3>
        <div class="form-group">
            <label for="exampleInputEmail1">Username :</label>
            <input type="text" class="form-control"
            value={name} 
            onChange={(e)=> setName(e.target.value)}
            placeholder="Enter Your Name"/>
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">email  :</label>
            <input type="email" class="form-control" id="exampleInputPassword1" placeholder="mike@gmail.com"/>
        </div>
        <button type="submit" class="btn btn-primary">Login</button>
    </form>
    )
}

export default Login