import { Container, Image } from "./styles";

interface IImages {
  image_name: string;
}

interface IProps {
  product: {
    id: string;
    name: string;
    description: string;
    price: number;
    images: IImages[];
  }
}


export function Product(props: IProps) {
  return (
    <Container>
      <Image src={props.product.images.length ? 
        props.product.images[0].image_name 
        : 'https://icon-library.net/images/no-image-available-icon/no-image-available-icon-8.jpg'} 
        alt="product_image" />
      <p>{props.product.name}</p>
      <span>Price: ${props.product.price}</span>
  </Container>
  )
}