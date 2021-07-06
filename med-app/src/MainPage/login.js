import React, { useState } from "react"

function Login() {
  const [values, setValues] = useState({
    username: "",
    password: ""

  });

  const handleUsernameChange = (event) => {
    setValues({ ...values, username: event.target.value })
  }

  const handlePasswordChange = (event) => {
    setValues({ ...values, password: event.target.value })
  }

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <br></br>
        {submitted ? <div>Success!</div> : null}
        <br></br>
        <input
          value={values.username}
          onChange={handleUsernameChange}
          type="email"
          placeholder="username" />
        <br></br>
        <input
          value={values.password}
          onChange={handlePasswordChange}
          type="password"
          placeholder="password" />
        <br></br>
        <input
          type="submit"
          placeholder="submit" />
      </form>
      <div>
        Create an account? Sign up
      </div>
    </div>
  )
}

export default Login