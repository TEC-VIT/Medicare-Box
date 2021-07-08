import React, { useState, useRef } from "react"
import { useAuth } from "../Authentication/authContext";
import { Link, useHistory } from "react-router-dom"

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
    <div>
      <h1>Log in</h1>
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
          type="submit"
          placeholder="submit"
          disabled={loading} />
      </form>
      <div>
        Need an account? 
        <Link to="/Signup">Sign up</Link>
      </div>
    </div>
  )
}

export default Login;
