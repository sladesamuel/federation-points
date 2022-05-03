import { useState } from "react"
import { Button, TextField } from "@mui/material"
import styled from "@emotion/styled"

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: -25px;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  min-width: 300px;

  & > div {
    margin: 0 0 1rem 0;
  }
`

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const submitLogin = async () => {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: {
        username: email,
        password
      }
    }

    const result = await fetch("/.netlify/functions/login", options)
    console.log(result)
  }

  return (
    <Container>
      <h2>Login</h2>

      <Form
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
          autoComplete="true"
          autoFocus
          fullWidth
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
          autoComplete="true"
          fullWidth
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
      </Form>
    </Container>
  )
}

export default Login
