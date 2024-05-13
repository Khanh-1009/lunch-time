import React, { useState } from "react";
import {Link, useNavigate} from 'react-router-dom'
import { useDispatch } from "react-redux"
import { signup } from "../userSlice";

function Signup() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [companyId, setCompanyId] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [errorsList, setErrorsList] = useState([])
    const navigate = useNavigate()
    const dispatch = useDispatch()

    function handleSubmit(e){
        e.preventDefault()
        fetch('/signup', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                username: username,
                email: email,
                company_id: companyId,
                password: password,
                password_confirmation: passwordConfirmation
            })
        })
        .then((res) => {
            if (res.ok) {
                res.json().then((user) => {
                    console.log("success")
                    dispatch(signup(user))
                    setUsername("")
                    setEmail("")
                    setCompanyId("")
                    setPassword("")
                    setPasswordConfirmation("")
                    alert('Thanks for signing up! Enjoy and share your experience with us!')
                    navigate('/')
                })
            } else {
                res.json().then((err) => {
                  setErrorsList(err.errors)
                  setTimeout(() => {
                    setErrorsList([])
                    setUsername("")
                    setEmail("")
                    setCompanyId("")
                    setPassword("")
                    setPasswordConfirmation("")
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
        <h1>Sign Up</h1>
        <input
          type="text"
          id="username"
          placeholder="*Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br/>
        <input
          type="text"
          id="email"
          placeholder="*Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br/>
        <select value={companyId} onChange={(e) => setCompanyId(e.target.value)}>
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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br/>
        <input
          type="password"
          id="password_confirmation"
          placeholder="*Confirm Password"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
        <br/>
        <button>Sign Up</button>
        <br/>
        <p>You might have created an account before? Please try to <Link to={'/login'} style={{color: "black"}}>sign in</Link></p>
        {errorsList.length > 0 && (
            <div>
                {errorsList.map((error) => (
                    <ul className="error" key={error}><span>!</span>{error}</ul>
                ))}
            </div>
        )}
      </form>
    </div>
  );
}

export default Signup;