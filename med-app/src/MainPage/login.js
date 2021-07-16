import React, { useState, useRef } from "react"
import { useAuth } from "../Authentication/authContext";
import { Link, useHistory } from "react-router-dom"
import './login.css'

function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false);
  const history = useHistory()

  async function handleSubmit(event) {
    event.preventDefault();

    try{
      setError('')
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      setSubmitted(true);
      history.push("/")
    } catch {
      setSubmitted(false);
      setError('Log in failed!!')
    }

    setLoading(false)
  }

  return (
    <div className="login">
      <h1 className="title">Log in</h1>

      {error && <div>{error}</div>}
      <form onSubmit={handleSubmit} className="login-card">
        
        {submitted ? <div>Success!</div> : null}
        
        <input className="input-box"
          type="email"
          placeholder="Email"
          ref={emailRef}
          required />
        
        <input className="input-box"
          ref={passwordRef}
          type="password"
          placeholder="Password"
          required />
        
        <input className="submit-btn"
          type="submit"
          placeholder="submit"
          disabled={loading} />
        
        
      </form>
      <div className="info-text">
        Need an account?  
        <Link to="/Signup" className="sign-up-txt"> Sign up</Link>
      </div>
    </div>
  )
}

export default Login;
