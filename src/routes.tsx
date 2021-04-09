import { BrowserRouter, Route} from 'react-router-dom';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Register } from './pages/Register';

function Routes() {

  return (
    <BrowserRouter>
      <Route path='/' exact component={Login} />
      <Route path='/store' component={Home} />
      <Route path='/register' component={Register} />
    </BrowserRouter>
  )
}

export { Routes }