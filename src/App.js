import React from "react";
//import Topmenu from './components/Topmenu.js'
import Products from './pages/Product.js'
import Bought from './pages/Bought.js'
import Home from './pages/Home.js'
import {CartProvider,CartContext} from './Context.js'
import './components/Topmenu.css'
import {
  BrowserRouter as Router,
  Switch,Link,
  Route
} from "react-router-dom";

export default function App() {
return (
  <Router>
  <div>
  <CartProvider>
    <div className='Topmenu'>
      <ul className='list'>
        <li><Link to ='/home'>Home</Link></li>
        <li><Link to ='/products'>Products</Link></li>
        <li>
          <CartContext.Consumer>
            {value=>
                <Link to ='/products/bought'>Cart({value.productDidAdd.length})</Link>
            }
          </CartContext.Consumer>
        </li>
      </ul>
    </div>
  
    {/* <Topmenu />  */}
    <Switch>
      <Route path='/home' exact component={Home}/>
      <Route path='/products' exact component={Products}/> 
      <Route path='/products/bought' exact component={Bought} />
    </Switch>
  </CartProvider>
  </div>
  </Router>
  );
}
