import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../services/api";
import { Container, FormLogin } from "./styles";

export function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  async function register(event: FormEvent) {
    event.preventDefault();
    try {
      const response = await api.post('/users', { email, password })
      if (response.data) {
        setMessage('Account created. Check your email to confirm registration.')
      }
    } catch (err) {
      setMessage(err.response.data.message)
      setEmail('')
      setPassword('')
    }

  }


  return (
    <Container>
      <FormLogin>
        <h2>Create Account</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={event => setEmail(event.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={event => setPassword(event.target.value)}
        />
        {
          message && <small>{message}</small>
        }

        <button type="submit" onClick={register}>Create Account</button>
        <p>Already registered? </p>
        <p> Click <Link to='/login'> here</Link> to sign in!</p>
      </FormLogin>
    </Container>
  )
}