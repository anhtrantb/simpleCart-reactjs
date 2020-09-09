import React from "react";
import {CartContext} from '../Context.js'
import {
    Navbar,
    Nav,
    NavItem,
    NavLink,
  } from 'reactstrap';
import { Link} from "react-router-dom";
import './Topmenu.css'
function Topmenu(){
    return (
    <div className='Topmenu'>
      <Navbar color="light" light expand="md">
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink >
                <Link to ='/home'>Home</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink ><Link to ='/products'>Products</Link></NavLink>
            </NavItem>
            <NavItem>
              <CartContext.Consumer>
                  {value=>
                      <NavLink ><Link to ='/products/bought'>Cart({value.productDidAdd.length})</Link></NavLink>
                  }
              </CartContext.Consumer>
            </NavItem>
          </Nav>
      </Navbar>
    </div>
    )
}
export default Topmenu;