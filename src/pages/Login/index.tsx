import { FormEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../providers/authProvider";
import { Container, FormLogin } from "./styles";

export function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { userLogin, errorMsg } = useAuth();

  async function login(event: FormEvent) {
    event.preventDefault();
    userLogin({ email, password })
  }

  useEffect(() => {
    setPassword('')
    setEmail('')
  }, [errorMsg])

  return (
    <Container>
      <FormLogin>
        <h1>Ecommerce</h1>
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
          errorMsg && <small>{errorMsg}</small>
        }

        <button type="submit" onClick={login}>Login</button>
        <p>Not registered yet? </p>
        <p> Click <Link to='/register'> here</Link>! to register</p>
      </FormLogin>
    </Container>
  )
}