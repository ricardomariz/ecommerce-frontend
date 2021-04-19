
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
  const [image, setImage] = useState<File>()
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


  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    const fileList = e.target.files;
    if (!fileList) return

    setImage(fileList[0])
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
      const response = await api.post('/products', product)
      const newProduct = response.data

      if (image) {
        const formData = new FormData();
        formData.append("file", image, image.name)
        await api.post('/products/images/' + newProduct.id, formData)
        console.log('criei foto')
      }

      await getProducts()
      console.log('peguei os produtos')
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
          <input type="file" name="file" multiple accept=".jpg, .jpeg, .png" onChange={handleImageChange} />
          <button type="submit" onClick={addProduct}>Create</button>
        </CreateForm>

      </Modal>
      <Header />
      <button onClick={openModal}>Add Product</button>
      <Content>
        {
          products.map(product => (
            <Product key={product.id}>
              <img src={product.images[0]?.image_name ? product.images[0].image_name : 'https://osceia.org.br/js/learnpress/assets/images/no-image.png'} alt={product.name} />
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