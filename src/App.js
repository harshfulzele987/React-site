
import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter as Router , Switch ,Route } from 'react-router-dom';
import Home from './components/pages/home';
import Product from './components/pages/product';
import Services from './components/pages/service';
import Signup from './components/pages/signup'


function App() {
  return (
    <>
    <Router>
     <Navbar />
     <Switch>
     <Route path ="/" exact  component={Home}/>
     <Route path ="/products" exact  component={Product}/>
     <Route path ="/services" exact  component={Services}/>
     <Route path ="/sign-up" exact  component={Signup}/>
 
 
     </Switch>
</Router>
</>
  );
}

export default App;
