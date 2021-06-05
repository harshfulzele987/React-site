import React ,{useState,useEffect } from 'react';
import {Link} from 'react-router-dom';
import { Button } from './button';
import './navbar.css'

function Navbar() {
          const[click ,setClick ] = useState(false);
          const[button , setbutton] = useState(true);

          const showButton =() =>{
                    if(window.innerWidth <= 960){
                              setbutton(false);
                    }else{
                              setbutton(true);
                    }
          };

          useEffect(()=>{
                    setbutton();
          },[]);
          window.addEventListener('resize' ,showButton);
          return (
                    <>
                    <nav className="navbar">
                    <div className="navbar-container">
                    <Link  to ="/" className="navbar-logo" onClick={()=>setClick(false)}> 
                              TRVL
                              <i className='fab fa-typo3'/> 
                              </Link>                                                 
                    <div className="menu-icon" onClick={()=>setClick(!click)}>
                              <i className={click ? 'fas fa-times ' : 'fas fa-bars'} />

                    </div>
                    <ul className={click ? "nav-menu active " : 'nav-menu'}>
                    <li className="nav-item">
                              <Link to="/" className="nav-links" onclick={()=>setClick(false)}>Home</Link>

                    </li>
                    <li className="nav-item">
                              <Link to="/services" className="nav-links" onclick={()=>setClick(false)}>Services</Link>

                    </li>
                    <li className="nav-item">
                              <Link to="/products" className="nav-links" onclick={()=>setClick(false)}>Products</Link>

                    </li>
                    <li className="nav-item">
                              <Link to="/signu-up" className="nav-links-mobile" onclick={()=>setClick(false)}>Sign Up</Link>

                    </li>
                    </ul>
                    {
                              button &&<Button buttonStyle="btn--outline">SIGN UP</Button>
                    }
                    </div>
                    </nav>
          
                    </>                                                                                                                                                                                                                                                                                                                                                                                                             
          )   
}

export default Navbar;
