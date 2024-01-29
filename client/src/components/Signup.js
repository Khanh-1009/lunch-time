import React from "react";
import {Link, useNavigate} from 'react-router-dom'

function Signup() {


  return (
    <div className="signup-login-form">
    <img src="https://t4.ftcdn.net/jpg/05/49/98/39/360_F_549983970_bRCkYfk0P6PP5fKbMhZMIb07mCJ6esXL.jpg"/>
      <form>
        <h1>Sign Up</h1>
        <input
          type="text"
          id="username"
          placeholder="Username"
          value=""
          onChange=''
        />
        <br/>
        <input
          type="text"
          id="company"
          placeholder="Company Name"
          value=""
          onChange=''
        />
        <br/>
        <input
          type="password"
          id="password"
          placeholder="Password"
          value=''
          onChange=''
        />
        <br/>
        <input
          type="password"
          id="password_confirmation"
          placeholder="Confirm Password"
          value=''
          onChange=''
        />
        <br/>
        <button>Sign Up</button>
        <br/>
        <p>You might have created an account before? Please try to <Link to={'/login'} style={{color: "black"}}>sign in</Link></p>
      </form>
    </div>
  );
}

export default Signup;