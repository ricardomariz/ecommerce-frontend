import { Container, Image } from "./styles";

interface Props {
  img: string;
}


export function Product(props: Props) {
  return (
    <Container>
      <Image src={props.img} alt="product_image" />
      <p>Rare jewelry</p>
      <span>Price: $400.00</span>
  </Container>
  )
}