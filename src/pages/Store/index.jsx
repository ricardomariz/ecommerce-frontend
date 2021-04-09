import { useHistory } from 'react-router-dom'
import { Header } from "../../components/Header/Header";
import { ProductList } from "../../components/ProductList/ProductList";
import { useAuth } from "../../providers/auth";


function Store() {
  const history = useHistory();
  const {authenticated, user} = useAuth();
  if (!authenticated) {
    history.push('/');
  }
  return (
    <>
      <Header user={user}/>
      <ProductList />
    </>
  )
}
export { Store }