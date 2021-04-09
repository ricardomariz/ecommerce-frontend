import { Header } from "./components/Header/Header";
import { ProductList } from "./components/ProductList/ProductList";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      <Header />
      <ProductList />
      <GlobalStyle />
    </>
  );
}
