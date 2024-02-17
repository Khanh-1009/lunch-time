import React, { useContext, useState } from "react";
import {Link, useNavigate} from 'react-router-dom'
import { UserContext } from "../user";

function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errorsList, setErrorsList] = useState([])
    const {login} = useContext(UserContext)
    const navigate = useNavigate()

    function handleSubmit(e){
        e.preventDefault()
        fetch('/login', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
        .then((res) => {
            if (res.ok) {
                res.json().then((user) => {
                    console.log("success")
                    login(user)
                    setUsername("")
                    setPassword("")
                    alert("You have successfully logged in. Welcome back!")
                    navigate('/')
                })
            } else {
                res.json().then((err) => {
                    setErrorsList(err.errors)
                    setTimeout(() => {
                        setErrorsList([])
                        setUsername("")
                        setPassword("")
                    }, 4000)     
                })
            }
        })
    }

    return (
        <div className="signup-login-form">
            <img src="https://t4.ftcdn.net/jpg/05/49/98/39/360_F_549983970_bRCkYfk0P6PP5fKbMhZMIb07mCJ6esXL.jpg"
            alt="avatar"/>
            <form onSubmit={handleSubmit}>
                <h1>Log In</h1>
                <input
                    type="text"
                    id="username"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <br/>
                <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br/>
                <button>Log In</button>
                <br/>
                <p>You don't have an account? Please <Link to={'/signup'} style={{color: "black"}}>register</Link></p>
                {errorsList.length > 0 && (
                    <div>
                        {errorsList.map((error) => (
                            <ul className="error" key={error}><span>!</span>{error}</ul>
                        ))}
                    </div>
                )}
            </form>
        </div>
    )
}

export default Login;