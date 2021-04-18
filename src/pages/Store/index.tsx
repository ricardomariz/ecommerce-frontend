
import { useEffect, useState } from "react"
import { Header } from "../../components/Header"
import { api } from "../../services/api"
import { Container, Content, Product } from "./styles"

interface ProductImage {
  image_name: string;
  id: string;
}

interface IProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  images: ProductImage[];
}

export function Store() {
  const [products, setProducts] = useState<IProduct[]>([])

  useEffect(() => {
    async function getProducts() {
      const response = await api.get('/products')
      const products = response.data
      setProducts(products)
    }

    getProducts();
  }, [])


  return (
    <Container>
      <Header />
      <Content>
        {
          products.map(product => (
            <Product key={product.id}>
              <img src={product.images[0].image_name} alt={product.name} />
              <h4>{product.name}</h4>
              <h5>{new Intl.NumberFormat('pt-br', {
                style: 'currency',
                currency: 'BRL',
              }).format(product.price)}</h5>
              <button>Add to cart</button>
            </Product>
          ))
        }

      </Content>
    </Container>
  )

}