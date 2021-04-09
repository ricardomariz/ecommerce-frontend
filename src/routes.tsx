import { BrowserRouter, Route} from 'react-router-dom';
import { Store } from './pages/Store';
import { Login } from './pages/Login';
import { ProductView } from './pages/ProductView'
import { Register } from './pages/Register';
import { AuthProvider } from './providers/auth';

function Routes() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Route path='/' exact component={Login} />
        <Route path='/store' component={Store} />
        <Route path='/product/:id' component={ProductView} />
        <Route path='/register' component={Register} />
      </BrowserRouter>
    </AuthProvider>
  )
}

export { Routes }