import {useHistory} from 'react-router-dom';
import { useAuth } from '../../providers/auth';
import { Container, Content } from './styles';


export function Header(props) {
  const {setAuthenticated} = useAuth();
  const history = useHistory();
  function handleSingOut() {
    localStorage.removeItem('Token');
    localStorage.removeItem('User');
    setAuthenticated(false);
    history.push('/');
    
  }

  return (
    <Container>
      <Content>
        <h2>Eshop</h2>
        <div>
           <h4>Welcome, {props.user.email}.</h4>
           <button onClick={handleSingOut}>Sign Out</button>
        </div>
      </Content>
    </Container>
  )
}