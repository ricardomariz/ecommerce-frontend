
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../providers/auth';
import { Header } from "../../components/Header/Header";
import { Container } from './styles';

function ProductView() {

  const history = useHistory();
  const {authenticated, user} = useAuth();
  
  useEffect(() => {
    if (!authenticated) {
      history.push('/');
    }
  }, [history, authenticated])

  return(
    <Container>
      <Header user={user}/>
      <h1>
        Product View
      </h1>
    </Container>

  )
}

export { ProductView }