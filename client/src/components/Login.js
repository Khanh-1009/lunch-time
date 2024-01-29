import React from "react";
import {Link, useNavigate} from 'react-router-dom'

function Login() {


    return (
        <div className="signup-login-form">
            <img src="https://t4.ftcdn.net/jpg/05/49/98/39/360_F_549983970_bRCkYfk0P6PP5fKbMhZMIb07mCJ6esXL.jpg"/>
            <form>
                <h1>Log In</h1>
                <input
                    type="text"
                    id="username"
                    placeholder="Username"
                    value=""
                    onChange=""
                />
                <br/>
                <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    value=""
                    onChange=""
                />
                <br/>
                <button>Log In</button>
                <br/>
                <p>You don't have an account? Please <Link to={'/signup'} style={{color: "black"}}>register</Link></p>
            </form>
        </div>
    )
}

export default Login;