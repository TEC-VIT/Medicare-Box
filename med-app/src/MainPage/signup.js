import React, { useState, useRef } from "react"
import { useAuth } from "../Authentication/authContext";
import { Link, useHistory } from "react-router-dom"

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
      history.push("/")
    } catch {
      setSubmitted(false)
      setError('Could not create an account!!')
    }

    setLoading(false)
  }

  return (
    <div>
      <h1>Sign up</h1>
      {error && <div>{error}</div>}
      <form onSubmit={handleSubmit}>
        <br></br>
        {submitted ? <div>Success!</div> : null}
        <br></br>
        <input
          type="email"
          placeholder="username"
          ref={emailRef}
          required />
        <br></br>
        <input
          ref={passwordRef}
          type="password"
          placeholder="password"
          required />
        <br></br>
        <input
          ref={passwordConfirmRef}
          type="password"
          placeholder="Confirm password"
          required />
        <br></br>
        <input
          type="submit"
          placeholder="submit"
          disabled={loading} />
      </form>
      <div>
        Already have an account? 
        <Link to="/Login">Log in</Link>
      </div>
    </div>
  )
}

export default Signup;
