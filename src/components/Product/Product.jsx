import { Container, Image } from "./styles";
import { useHistory } from 'react-router-dom';

export function Product(props) {
  const history = useHistory()
  
  function handleClick(id) {
    history.push('/product/'+ id);
  }

  return (
    <Container>
      <Image src={props.product.images.length ? 
        props.product.images[0].image_name 
        : 'https://icon-library.net/images/no-image-available-icon/no-image-available-icon-8.jpg'} 
        alt="product_image" 
        onClick={() => handleClick(props.product.id)}
        />
      <p>{props.product.name}</p>
      <span>Price: ${props.product.price}</span>
  </Container>
  )
}