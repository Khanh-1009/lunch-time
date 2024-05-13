import React, { useEffect } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { fetchCart } from '../cartSlice';
import { fetchUser, logout } from '../userSlice';


function Header() {
    const navigate = useNavigate()
    const cart = useSelector((state) => state.cart.entities)
    const user = useSelector((state) => state.user.entities)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUser())
    }, [dispatch])

    useEffect(() => {
        dispatch(fetchCart())
    }, [dispatch])

    function handleLogoutClick(){
        if (window.confirm("Do you want to log out?")) {
            fetch('/logout', {
                method: "DELETE",
                headers: {'Content-Type': 'application/json'}
            })
            .then(() => {
                navigate('/')
                dispatch(logout())
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
            {!user || user.error ? "" : (<NavLink 
                to="/profile" 
                style={({isActive}) => { return {
                color: isActive ? "white" : "rgb(20, 134, 255)",
                background: isActive? "rgb(20, 134, 255)" : "white"
                }}}
                className={({isActive}) => (isActive ? 'active' : 'link')}
                >
                Profile
            </NavLink>)}
            {!user || user.error ? "" : (<NavLink
                to="/cart" 
                style={({isActive}) => { return {
                color: isActive ? "white" : "rgb(20, 134, 255)",
                background: isActive? "rgb(20, 134, 255)" : "white"
                }}}
                className={({isActive}) => (isActive ? 'active' : 'link')}>
                &#128722; ({cart === null ? "" : cart.item_counts})
                </NavLink>)}
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