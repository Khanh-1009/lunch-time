import React from 'react'
import { Link, NavLink } from 'react-router-dom';

function Header() {

    return (
        <header>
            <Link to="/" style={{textDecoration: "none"}}><h1><span>&#129386;</span><b>Happy Lunch</b></h1></Link>
            <div className='navlink'>
            <NavLink 
                to="/" 
                style={({isActive}) => { return {
                color: isActive ? "white" : "rgb(20, 134, 255)",
                background: isActive? "rgb(20, 134, 255)" : "white"
                }}}
                className={({isActive}) => (isActive ? 'active' : 'link')}
                >
                Home
            </NavLink>
            <NavLink 
                to="/about-us" 
                style={({isActive}) => { return {
                color: isActive ? "white" : "rgb(20, 134, 255)",
                background: isActive? "rgb(20, 134, 255)" : "white"
                }}}
                className={({isActive}) => (isActive ? 'active' : 'link')}
                >
                About Us
            </NavLink>
            <NavLink 
                to="/login" 
                style={({isActive}) => { return {
                color: isActive ? "white" : "rgb(20, 134, 255)",
                background: isActive? "rgb(20, 134, 255)" : "white"
                }}}
                className={({isActive}) => (isActive ? 'active' : 'link')}
                >
                &#128100; Login
            </NavLink>
            </div>
        </header>
    )

}

export default Header;