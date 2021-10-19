import React from 'react';
import {Link} from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWallet, faBars, faSearch } from '@fortawesome/free-solid-svg-icons'


function GuestHome() {
    
    return (
        
            <header>
                <a href="/" className="logo"><FontAwesomeIcon icon={faWallet} />Wallet App</a>
                <nav className="navbar">
                    <a className="active" href="#home">home</a> 
                    <a href="#Balance">balance</a>
                    <a href="#last-operations">last operations</a>
                    <Link to='/users/register'>register</Link>
                    <Link to='/users/login'>login</Link>
                </nav>
                <div className="icons">
                    <FontAwesomeIcon icon={faBars} id="menu-bars"/>
                    <FontAwesomeIcon icon={faSearch} id="search-icon"/>
                </div>
            </header>
        
    )
}

export default GuestHome;