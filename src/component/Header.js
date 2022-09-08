import React, { useState } from 'react';
import { Link,NavLink} from "react-router-dom";
import { FaBars } from 'react-icons/fa';
import "./../style/Header.css";
import { Data } from './Data';
import {contact} from './Contact';
import {Demo} from './Demo';


const Header = () => {
  
  const [open,setOpen] = useState(false)

    const showMenu = () => {
        setOpen(!open)
    }



  return (

<div className="header">
      <nav>
         <div className="logo">
               <h1>MMP</h1>
        </div>
        <ul className='ul-items'>
          <li>
             <Link to='#'>Home</Link>
          </li>

          <li>
             <Link to='#'>ABOUT</Link>
          </li>

          <li>
             <Link to='#'>SERVICES</Link>
          </li>

          <li>
             <Link to='#'>PROJECTS</Link>
          </li>

          <li>
             <Link to='#'>BLOG</Link>
          </li>

          <li>
             <Link to='/contact'>Contact</Link>
          </li>
           <li>
             <NavLink to="./Demo">Demo</NavLink>
          </li>

           
        <div className='hamburger-menu'>
          
          <h4 className='menu' onClick={showMenu}><FaBars/></h4>
        </div>
   
         
         
         
         
         
          
      </ul>

        
 </nav>

     <nav className={open ? 'slider active' : 'slider'}>
        <ul className='slider-ul' onClick={showMenu}>
          {Data.map((item, index) => {
            return (
              <li key={index} className={item.className} >
                <Link to={item.path}>{item.text}</Link>
            
              </li>
            )
          })}
        </ul>
      </nav>

 </div>
  
 );
}

export default Header;