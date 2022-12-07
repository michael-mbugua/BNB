import React from 'react'
import './Header.css'
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className='header'>
            <Link className='link' to='/'>
                
            </Link>

            

            <div className='header__right'>
                <a href="/home">Home</a>
                <a href="/login">Login</a>
                <a href="/register">Signup</a>
                <a href="/search">Book</a>
                <a href="/home">Houses</a>
                
                <Avatar />
            </div>
        </div>
    )
}

export default Header
