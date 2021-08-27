import './App.css';
import {BrowserRouter ,  Switch , Route } from 'react-router-dom';
import {createStore ,applyMiddleware} from 'redux';
import Reducer from './Reducer';
import NotFound from './Components/notFound.js';
import SignUp from './Components/SignUp';
import NavBar from './Components/NavBar';
import Login from './Components/login';
import Dashboard  from './Components/dashboard.js';
import PrivateRoute from './Components/PrivateRoutes';
import PublicRoute from './Components/PublicRoutes';
import Logout from './Components/logut';
import History from './Components/history';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
const store = createStore(Reducer, applyMiddleware(thunk));
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Provider store={store}>
        <BrowserRouter>
        <NavBar/>
          <Switch>
            <PublicRoute exact path="/" component={SignUp}/>
            <PublicRoute exact path="/login" component={Login}/>
            <PrivateRoute exact path="/dash" component={Dashboard}/>
            <PrivateRoute exact path='/Logout' component={Logout}/>
            <PrivateRoute exact path='/history' component={History}/>
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Provider>
      </header>
    </div>
  );
}

export default App;
