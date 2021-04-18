
import { useEffect, useState } from "react"
import { Header } from "../../components/Header"
import { useAuth } from "../../providers/authProvider"
import { api } from "../../services/api"
import { Container, Content, Product, Remove } from "./styles"

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
  const { user } = useAuth()


  async function getProducts() {
    const response = await api.get('/products')
    const products = response.data
    setProducts(products)
  }

  async function addProduct() {
    const product = {
      name: "Teste",
      description: "Oldest mobile phone from Apple",
      price: 1499.99,
      user_id: user.user.id
    }
    try {
      await api.post('/products', product)
      await getProducts()
    } catch (err) {
      console.log(err.response.data.message)
    }
  }

  async function removeProduct(productId: string) {
    try {
      await api.delete('/products/' + productId)
      await getProducts()
    } catch (err) {
      console.log(err.response.data.message)
    }

  }
  useEffect(() => {
    getProducts();
  }, [])



  return (
    <Container>
      <Header />
      <button onClick={addProduct}>Add Product</button>
      <Content>
        {
          products.map(product => (
            <Product key={product.id}>
              <img src={product.images[0]?.image_name ? product.images[0].image_name : 'http://localhost:3333/tmp/images/products/26acb133a00ad27c934385e82c6d55c0-Passaporte-node-js.png'} alt={product.name} />
              <h4>{product.name}</h4>
              <h5>{new Intl.NumberFormat('pt-br', {
                style: 'currency',
                currency: 'BRL',
              }).format(product.price)}</h5>
              <button>Add to cart</button>
              <Remove onClick={() => removeProduct(product.id)}>Remove Product</Remove>
            </Product>
          ))
        }

      </Content>
    </Container>
  )

}