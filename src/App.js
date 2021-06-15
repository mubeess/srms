import logo from './logo.svg';
import {Route,Switch,BrowserRouter} from 'react-router-dom'
import AppState from './Context/app/appState'
import './App.css';
import Login from './Components/auth/Login';
import Index from './Components/dash/Index'

function App() {
  return (
    <BrowserRouter>
      <Switch>
      <AppState>
      <Route exact path='/' component={Login}></Route>
      <Route exact path='/dash/:place' component={Index}></Route>
      </AppState>
      </Switch>
     </BrowserRouter>
  );
}

export default App;
