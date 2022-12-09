import { responsiveFontSizes } from '@material-ui/core'
import React,{useState} from 'react'
import "./Book.css"

function Book() {
    const [name,setName]=useState("")
    const [checkIn,setCheckIn]=useState("")
    const [checkOut,setCheckOut]=useState("")
    const [persons,setPersons]=useState("")
    
    function handleSubmit(e){
        e.preventDefault()
        const booking={
            name: name,
            checkIn: checkIn,
            checkOut: checkOut,
            persons: persons
        }
        fetch('http://localhost:3000/bookings',{
            method: "POST",
            headers: {
                "Content-Type":"application/json",
            },
            body: JSON.stringify(booking)
        }).then((res)=>res.json())
        .then((data)=>{
            console.log(data)
        })
    }

    return (
    <form onSubmit={handleSubmit} >
        <div className='credentials'>
            <label >Name </label>
            <input type="text"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            placeholder="Enter Your Name"/>
            <label > House Type</label>
            <input type="text"  placeholder="eg ; condo"/>
            <label >No of People </label>
            <input
            value={persons}
            onChange={(e)=>setPersons(e.target.value)}
            type="number"  placeholder=""/>
        </div>
            

        <div className='dates'>
            <label >Check in Date </label>
            <input
            value={checkIn}
            onChange={(e)=>setCheckIn(e.target.value)}
            type="date"  id="date" />
            <label>Check out Date </label>
            <input
            value={checkOut}
            onChange={(e)=>setCheckOut(e.target.value)}
            type="date"  id="date" />
        </div>

            
        <input type="submit"
        className="button" value="submit"/>
    </form>
    )
}


export default Book