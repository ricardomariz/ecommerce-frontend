import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Store } from './pages/Store';

function Routes() {

  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Store} />
        <Route path='/login' exact component={Login} />
        <Route path='/register' component={Register} />
      </Switch>
    </BrowserRouter>
  )
}

export { Routes }