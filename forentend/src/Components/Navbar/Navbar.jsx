/* eslint-disable react/prop-types */
import  { useContext, useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../Context/StoreContext';

const Navbar = ({ setShowLogin }) => {
  const { getTotalCartAmount,token ,settoken } = useContext(StoreContext);
  const [menu, setMenu] = useState("home");
const navigate = useNavigate();
  const logout =()=>{
localStorage.removeItem("token");
settoken("");
navigate("/")
}
  return (
    <div className='navbar'>
      <Link to='/'>
        <img src={assets.logo} alt="Logo" className='logo' />
      </Link>
      <ul className="navbar-menu">
        <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link>
        <a href="#explore-menu" onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</a>
        <a href="#app-media" onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>Mobile App</a>
        <a href="#footer" onClick={() => setMenu("contact-me")} className={menu === "contact-me" ? "active" : ""}>Contact Me</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="Search" />
        <div className="navbar-search-icon">
          <Link to='/Cart'>
            <img src={assets.basket_icon} alt="Cart" />
          </Link>
            <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
{!token?<button onClick={() => setShowLogin(true)}>Sign Up</button>:
<div className='navabr-profile'>
  <img src={assets.profile_icon} alt="" />
<ul className="nav-profile-drop-down">
  <li><img src={assets.bag_icon} alt="" /><p>orders</p>
</li><hr />
  <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>logout</p></li></ul></div>}
        
      </div>
    </div>
  );
}

export default Navbar;
