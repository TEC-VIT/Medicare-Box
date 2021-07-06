import React, { useState } from "react"
import { useAuth } from "../Authentication/authContext";

function Signup() {
  const [values, setValues] = useState({
    username: "",
    password: "",
    confirmPassword: ""
  });

  //const { signup } = useAuth()

  const handleUsernameChange = (event) => {
    setValues({ ...values, username: event.target.value })
  }

  const handlePasswordChange = (event) => {
    setValues({ ...values, password: event.target.value })
  }

  const handleConfirmPasswordChange = (event) => {
    setValues({ ...values, confirmPassword: event.target.value })
  }

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);


  }

  return (
    <div>
      <h1>Sign up</h1>
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
          value={values.confirmPassword}
          onChange={handleConfirmPasswordChange}
          type="password"
          placeholder="Confirm password" />
        <br></br>
        <input
          type="submit"
          placeholder="submit" />
      </form>
      <div>
        Already have an account? Log in
      </div>
    </div>
  )
}

export default Signup;
