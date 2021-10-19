import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWallet, faBars, faSearch } from '@fortawesome/free-solid-svg-icons'


function HeaderLoginHome(props) {
    
    return (
        
            <header>
                <a href="/" className="logo"><FontAwesomeIcon icon={faWallet} />Wallet App</a>
                <nav className="navbar">
                    <a className="active" href="#home">home</a> 
                    <a href="#Balance">balance</a>
                    <a href="#last-operations">last operations</a>
                </nav>
                <div className="icons">
                    <FontAwesomeIcon icon={faBars} id="menu-bars"/>
                    <FontAwesomeIcon icon={faSearch} id="search-icon"/>
                    <div className="icon-user">
                        <img src={props.login.avatar} alt="user-avatar" className="user-image-header"/>
                    </div>
                    <div className="user-menu">
                        <ul type='none'>
                            <li><a href="/users/account/">Edit Account</a></li>
                            <li><a href="/users/logout">Logout</a></li>
                        </ul>
                    </div>
                </div>
            </header>
        
    )
}

export default HeaderLoginHome;