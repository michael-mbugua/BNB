import React,{useEffect} from 'react'
import './Register.css'


function Register() {
    useEffect(()=>{
        fetch("/users",{
            method:"POST",
            headers:{
                "content-Type" :"application/json",
            },
            body: JSON.stringify({})
        })
    })

    return (
    <form className='login'>
        <div class="form-group">
            <label for="exampleInputEmail1">First Name :</label>
            <input type="text" class="form-control" placeholder="Enter Your Name"/>
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Email :</label>
            <input type="email" class="form-control" id="exampleInputPassword1" placeholder="mike@gmail.com"/>
        </div>
        <div class="form-group">
            <label for="exampleInputEmail1">Phone Number : </label>
            <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="+25471234"/>
        </div>
        
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    )
}

export default Register