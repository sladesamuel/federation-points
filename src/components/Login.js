import { useState } from "react"
import { Button, TextField } from "@mui/material"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const submitLogin = () => {
    // TODO: Call login function.
    console.log(`TODO: Login for ${email}`)
  }

  return (
    <>
      <h2>Login</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          submitLogin()
        }}
      >
        <TextField
          id="email"
          label="Email"
          type="email"
          variant="standard"
          value={email}
          onChange={(e) => {
            e.preventDefault()
            setEmail(e.target.value)
          }}
          autoFocus
          autoComplete
          required
        />

        <TextField
          id="password"
          label="Password"
          type="password"
          variant="standard"
          value={password}
          onChange={(e) => {
            e.preventDefault()
            setPassword(e.target.value)
          }}
          autoComplete
          required
        />

        <Button
          type="submit"
          variant="contained"
          onClick={(e) => {
            e.preventDefault()
            submitLogin()
          }}
        >
          Login
        </Button>
      </form>
    </>
  )
}

export default Login
