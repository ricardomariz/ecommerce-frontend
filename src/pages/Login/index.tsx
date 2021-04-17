import { Link } from "react-router-dom";
import { Container, FormLogin } from "./styles";

export function Login() {
  return (
    <Container>
      <FormLogin>
        <h1>login page</h1>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Senha" />
        <button type="submit">Login</button>
        <p>Not registered yet? </p>
        <p> Click <Link to='/register'> here</Link>! to register</p>
      </FormLogin>
    </Container>
  )
}