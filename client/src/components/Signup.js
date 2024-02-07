import React, { useContext, useState } from "react";
import {Link, useNavigate} from 'react-router-dom'
import { UserContext } from "../user";

function Signup() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [companyId, setCompanyId] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [errorsList, setErrorsList] = useState([])
    const {signup} = useContext(UserContext)


  return (
    <div className="signup-login-form">
    <img src="https://t4.ftcdn.net/jpg/05/49/98/39/360_F_549983970_bRCkYfk0P6PP5fKbMhZMIb07mCJ6esXL.jpg"/>
      <form>
        <h1>Sign Up</h1>
        <input
          type="text"
          id="username"
          placeholder="*Username"
          value=""
          onChange=''
        />
        <br/>
        <input
          type="text"
          id="email"
          placeholder="*Email Address"
          value=""
          onChange=''
        />
        <br/>
        <select name="filter">
            <option value="">*Select Your Company</option>
            <option value={1}>Meta Inc.</option>
            <option value={2}>Alphabet Inc.</option>
            <option value={3}>Amazon Inc.</option>
            <option value={4}>Apple Inc.</option>
            <option value={5}>Oracle Corporation</option>
            <option value={6}>Samsung Electronics, Inc.</option>
            <option value={7}>Tesla, Inc.</option>
            <option value={8}>VinFast Auto Ltd.</option>
        </select>
        <input
          type="password"
          id="password"
          placeholder="*Password"
          value=''
          onChange=''
        />
        <br/>
        <input
          type="password"
          id="password_confirmation"
          placeholder="*Confirm Password"
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