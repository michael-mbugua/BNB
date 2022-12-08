import React from 'react'
import "./Book.css"

function Book() {

    
    return (
    <div>
        <div class="form-group">
            <label for="exampleInputEmail1">Name :</label>
            <input type="text" class="form-control" placeholder="Enter Your Name"/>
        </div>
        <div class="form-group">
            <label for="exampleInputEmail1"> House Type</label>
            <input type="text" class="form-control" placeholder="Enter Your Name"/>
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Check in Date :</label>
            <input type="date" class="form-control" id="date" />
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Check out Date :</label>
            <input type="date" class="form-control" id="date" />
        </div>
        <div class="form-group">
            <label for="exampleInputEmail1">No of People : </label>
            <input type="number" class="form-control" id="exampleInputEmail1"  placeholder=""/>
        </div>
        <input type="submit" class="btn btn-primary" value="submit"/>
    </div>
    )
}


export default Book