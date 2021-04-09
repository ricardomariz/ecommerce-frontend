import { api } from '../../services/api';

import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../providers/auth';
import { Header } from "../../components/Header/Header";
import { Container } from './styles';

function ProductView(props) {
  const history = useHistory();
  const {authenticated, user} = useAuth();
  const [product, setProduct] = useState([])



  useEffect(() => {
    if (!authenticated) {
      history.push('/');
    }
    async function getProduct() {
      try {
        const response = await api.get('/products/' + props.match.params.id + '/')
        setProduct(response.data)
      } catch (err) {
        console.log(err.response.data.message)
      }
    }
    getProduct();
  }, [history, authenticated, props.match.params.id])
  

  return(
    <>
      <Header user={user}/>
      <Container>
        <h1>
          {product.name}
        </h1>
        <br/>
        <p>
          {product.description}
        </p>
        <br/>
        <p>
          {product.price}
        </p>


      </Container>
    </>

  )
}

export { ProductView }