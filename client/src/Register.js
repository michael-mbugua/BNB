import React,{useEffect,useState} from 'react'
import './Register.css'
import {useHistory} from 'react-router-dom'
function Register() {
    const history=useHistory()
    const [name,setName] =useState("")
    const [phoneNumber,setPhoneNumber] =useState()
    const [email,setEmail] =useState("")
    const [houseNumber,setHouseNumber] =useState("")
    function handleSubmit(e){
        e.preventDefault()
        const newUser={
            name: name,
            Phone: phoneNumber,
            email: email,
            house_id: houseNumber
        }
        
            fetch('http://localhost:3000/users',{
                method:'POST',
                headers: {
                    "Content-Type":"application/json",
                },
                body: JSON.stringify(newUser)
            })
            .then((res) => res.json())
            .then((data) => {
            console.log(data);
        });
    }   
    return (
    <form  className='login' onSubmit={handleSubmit}>
        <div className="form-group">
            <label>First Name :</label>
            <input
            required 
            type="text"
            className="form" 
            placeholder="Enter Your Name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            />
        </div>
        <div className="form-group">
            <label >Email :</label>
            <input
            required
            type="email" className="form-control" 
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            placeholder="mike@gmail.com" />
        </div>
        <div className="form-group">
            <label>House_id : </label>
            <input
            required
            type="number" className="form-control" id="exampleInputEmail1"  placeholder="1"
            value={houseNumber}
            onChange={(e)=>setHouseNumber(e.target.value)}
            />
            <div className='info'><p>Type 1 if not sure</p></div>
        </div>
        
        
        <button type="submit" onClick={()=>history.push('/login')} className="btn btn-primary">Sign Up</button>

        <span><b>AFTER SIGN UP GO TO LOGIN</b></span>
    </form>
    )
}

export default Register