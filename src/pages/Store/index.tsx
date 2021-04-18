
import { FormEvent, useEffect, useState } from "react"
import Modal from "react-modal"
import { Header } from "../../components/Header"
import { useAuth } from "../../providers/authProvider"
import { api } from "../../services/api"
import { Container, Content, CreateForm, Product, Remove } from "./styles"

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
  const [modalIsOpen, setIsOpen] = useState(false)
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState(0)

  function openModal() {
    setIsOpen(true)
  }

  function handleModalClose() {
    setIsOpen(false)
  }

  async function getProducts() {
    const response = await api.get('/products')
    const products = response.data
    setProducts(products)
  }

  async function addProduct(event: FormEvent) {
    event.preventDefault()

    const product = {
      name,
      description,
      price,
      user_id: user.user.id
    }
    try {
      await api.post('/products', product)
      await getProducts()
      setIsOpen(false)
      setName('')
      setDescription('')
      setPrice(0)
    } catch (err) {
      console.log(err.response.data.message)
      setName('')
      setDescription('')
      setPrice(0)
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

  Modal.setAppElement('#root')

  return (
    <Container>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleModalClose}
        overlayClassName='react-modal-overlay'
        className='react-modal-content'
      >
        <CreateForm>
          <h2>Create Product</h2>
          <input placeholder="Name" value={name} onChange={event => setName(event.target.value)} />
          <input type="text" placeholder="Description" onChange={event => setDescription(event.target.value)} />
          <input type="number" placeholder="Price" min='0' onChange={event => setPrice(Number(event.target.value))} />
          <button type="submit" onClick={addProduct}>Create</button>
        </CreateForm>

      </Modal>
      <Header />
      <button onClick={openModal}>Add Product</button>
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