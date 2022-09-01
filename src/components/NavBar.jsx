import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {GoThreeBars} from 'react-icons/go';
import Logo from '../images/logo.png';
import {links} from '../data'
import './NavBar.css';

const NavBar = () => {
  const [isNavShowing,setIsNavShowing]=useState(false);
  return (
    <nav>
      <div className="container nav__container">
        <Link to='/' className="logo">
          <img src={Logo} alt="Nav Logo" />
        </Link>
        <ul className={`nav__links ${isNavShowing ? 'show__nav':'hide__nav'}`}>
            {
              links.map(({name,path},index)=>{
                return(
                  <li>
                    <NavLink to={path} className={({isActive})=> isActive ? 'active-nav':''} >{name}</NavLink>
                  </li>
                )
              })
            }
        </ul>
        <button className="nav__toggle-btn" onClick={()=>{setIsNavShowing(!isNavShowing)}}>
            <GoThreeBars/>
        </button>
      </div>
    </nav>
  )
};

export default NavBar;