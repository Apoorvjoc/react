import {Route , Switch} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/Dashboard';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';
import Error from './components/Error';
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <div className="App">
      <Navbar/>

      <Switch>
              <Route exact path = "/">
                <Home/>
              </Route>
        
              <Route path="/about">
                <About/>
              </Route>
        
              <Route path="/login">
                <Login/>
              </Route>
        
              <Route path = "/signup">
                <Signup/>
              </Route>
              
              <Route path = "/contact">
                <Contact/>
              </Route>
        
              <Route path = "*">
                <Error/>
              </Route>

      </Switch>
        
    </div>
  );
}

export default App;
