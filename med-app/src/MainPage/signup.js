import React, { useState, useRef } from "react"
import { useAuth } from "../Authentication/authContext";
import { Link, useHistory } from "react-router-dom"
import './signup.css'
function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false);
  const history = useHistory()

  async function handleSubmit(event) {
    event.preventDefault();

    if(passwordRef.current.value !== passwordConfirmRef.current.value){
      return (
        setError("passwords don't match"),
        setSubmitted(false)
      )
    }

    try{
      setError('')
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      setSubmitted(true);
      history.push("/details")
    } catch {
      setSubmitted(false)
      setError('Could not create an account!!')
    }

    setLoading(false)
  }

  return (
    <div className="signup">
      <h1 className="title">Sign up</h1>
      {error && <div>{error}</div>}
      <form onSubmit={handleSubmit} className="signup-card">
        
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
        
        <input className="input-box"
          ref={passwordConfirmRef}
          type="password"
          placeholder="Confirm Password"
          required />
        
        <input className="submit-btn"
          type="submit"
          placeholder="submit"
          disabled={loading} />
      </form>
      <div className="info-text">
        Already have an account? 
        <Link to="/Login" className="sign-up-txt"> Log in</Link>
      </div>
    </div>
  )
}

export default Signup;
