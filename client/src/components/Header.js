import React, { useContext } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { UserContext } from '../user';

function Header() {
    const {user, logout} = useContext(UserContext)
    const navigate = useNavigate()

    function handleLogoutClick(){
        if (window.confirm("Do you want to log out?")) {
            fetch('/logout', {
                method: "DELETE",
                headers: {'Content-Type': 'application/json'}
            })
            .then(() => {
                navigate('/')
                logout()
            })
        }
    }

    return (
        <header>
            <Link to="/" style={{textDecoration: "none"}}><h1><span>&#129386;</span><b>Yumilicious!</b></h1></Link>
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
                to="/profile" 
                style={({isActive}) => { return {
                color: isActive ? "white" : "rgb(20, 134, 255)",
                background: isActive? "rgb(20, 134, 255)" : "white"
                }}}
                className={({isActive}) => (isActive ? 'active' : 'link')}
                >
                Profile
            </NavLink>
            {!user || user.error ? (<NavLink 
                to="/login" 
                style={({isActive}) => { return {
                color: isActive ? "white" : "rgb(20, 134, 255)",
                background: isActive? "rgb(20, 134, 255)" : "white"
                }}}
                className={({isActive}) => (isActive ? 'active' : 'link')}
                >
                &#128100; Login
            </NavLink>) : 
            (<NavLink onClick={handleLogoutClick} color='blue'>{user.username}, Log Out</NavLink>)}
            </div>
        </header>
    )

}

export default Header;