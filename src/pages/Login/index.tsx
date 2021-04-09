import { Link } from 'react-router-dom'
import { Content, Container } from "./styles"

function Login() {
  return(
    <Container>
        <Content>
          <h2>Eshop</h2>
          <input placeholder="E-mail" />
          <input type="password" placeholder="Password" />
          <div>
            <button type="submit"> Sign in </button>
            <div>
              or &nbsp; 
             <Link to="/register">Sign up</Link>
             </div>
          </div>
        </Content>
    </Container>
  )
}

export { Login }