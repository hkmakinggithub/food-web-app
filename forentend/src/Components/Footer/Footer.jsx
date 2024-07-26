import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="Logo" />
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum officia obcaecati aut eius veniam, ex voluptas assumenda, magnam eveniet quos saepe rem quam nemo amet, quidem minima pariatur molestiae rerum?</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="Facebook" />
                        <img src={assets.twitter_icon} alt="Twitter" />
                        <img src={assets.linkedin_icon} alt="LinkedIn" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>Company</h2>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>Get in Touch</h2>
                    <ul>
                        <li>+91 265985223495</li>
                        <li>harshsompura24@gmail.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="copyright-text">
                &copy; HK-Making24
            </p>
        </div>
    );
}

export default Footer;
