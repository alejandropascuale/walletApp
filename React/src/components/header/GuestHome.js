import React from 'react';
import {Link} from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWallet, faBars, faSearch } from '@fortawesome/free-solid-svg-icons'


function GuestHome() {
    const openBar = () => {
        let menu = document.querySelector('#menu-bars');
        let navbar = document.querySelector('.navbar');
        menu.classList.toggle('fa-times');
        navbar.classList.toggle('active');
    }
    return (
        
            <header>
                <a href="/" className="logo"><FontAwesomeIcon icon={faWallet} />Wallet App</a>
                <nav className="navbar">
                    {/* <Link className="active" to="#home">home</Link> 
                    <Link to="#Balance">balance</Link>
                    <Link to="#last-operations">last operations</Link> */}
                    <Link to='/users/register'>register</Link>
                    <Link to='/users/login'>login</Link>
                </nav>
                <div className="icons">
                    <FontAwesomeIcon onClick={() => openBar()} icon={faBars} id="menu-bars"/>
                    <FontAwesomeIcon icon={faSearch} id="search-icon"/>
                </div>
            </header>
        
    )
}

export default GuestHome;