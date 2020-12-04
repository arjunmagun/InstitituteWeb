import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='inner-footer'>
                <h1>
                    Footer Content
                </h1>
                <p>
                    Here is some information about the website or institute!
                </p>
            </div>
            <div className='inner-mid'>
                <h1>
                    SCA
                </h1>
                <ul>
                    <li>
                        <a href='/'>Home</a>
                    </li>
                    <li>
                        <a href='/about'>About us</a>
                    </li>
                    <li>
                        <a href='/contact'>Contact Us</a>
                    </li>
                </ul>
            </div>
            <div className='bottom'>
                 <p>&copy; {new Date().getFullYear()} Copyright: <a href="/"> Arjun Magun </a></p>
            </div>
        </div>
    )
}

export default Footer;