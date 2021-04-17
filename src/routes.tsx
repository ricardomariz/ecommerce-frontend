import { Route, Switch } from 'react-router-dom';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Store } from './pages/Store';

function Routes() {

  return (
    <Switch>
      <Route path='/' exact component={Store} />
      <Route path='/login' component={Login} />
      <Route path='/register' component={Register} />
    </Switch>
  )
}

export { Routes }