import { Link } from 'react-router-dom'
import { Content, Container, Error } from "./styles"

import { api } from '../../services/api';
import { FormEvent, useState } from 'react';


function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('')
  
  
  async function handleSignUp(event: FormEvent) {
    event.preventDefault()

    try {
      const response = await api.post('/users', {email, password})
      console.log(response)
    } catch (err) {
      setErrorMsg(err.response.data.message)

      setEmail('')
      setPassword('')
    }
  
  }

  return(
    <Container>
        <Content>
          <h2>Register</h2>
          
          <input 
            placeholder="E-mail" 
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
            errorMsg && <Error>{errorMsg}</Error>
          }
          <div>
            <button type="submit" onClick={handleSignUp}> Sign up </button>
            <div>
              or &nbsp; 
             <Link to="/">Sign in</Link>
             </div>
          </div>
        </Content>
    </Container>
  )
}

export { Register }