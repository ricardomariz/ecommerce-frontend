import { Product } from '../Product/Product';
import { Container } from './styles';
import { api } from '../../services/api';
import { useEffect, useState } from 'react';

export function ProductList() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    async function loadProducts() {
      try {
        const response = await api.get('/products')
        setProducts(response.data)
      } catch (err) {
        console.log(err.response.data.message)
      }

    }
    loadProducts();
  }, [])


  return (
    <Container> 
      {
        products.map(product => {
          return (
            <Product key={product} product={product} />
          )
        })
      }
    </Container>

  )
}