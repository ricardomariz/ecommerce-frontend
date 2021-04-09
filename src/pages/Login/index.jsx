import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../../providers/auth';
import { api } from '../../services/api';
import { Content, Container, Error } from "./styles"

function Login() {
  const history = useHistory()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const {authenticated, setAuthenticated} = useAuth();
  
  if (authenticated) {
    history.push('/store');
  }

  async function handleSigIn(event) {
    event.preventDefault()
    try {
      const response = await api.post('/sessions', { email, password });
      const { user, token } = response.data;
      if (user.isActive) {
        setAuthenticated(true)
        api.defaults.headers.Authorization = `Bearer ${token}`;
        localStorage.setItem('Token', token);
        localStorage.setItem('User', JSON.stringify(user));
        history.push('/store');
      } else {
        setErrorMsg('User is not active.')
      }
    } catch (err) {
      setErrorMsg(err.response.data.message);
      setPassword('');
      setEmail('');
    }  
  }

  return(
    <Container>
        <Content>
          <h2>Eshop</h2>
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
            <button type="submit" onClick={handleSigIn}> Sign in </button>
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