import React from 'react';
import {Link} from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWallet, faBars, faSearch } from '@fortawesome/free-solid-svg-icons'


function UserLoginHome(props) {
    let displayMenu = () => {
        let userMenu = document.querySelector('.user-menu');
        userMenu.style.display = 'block';
    }
    let hiddenMenu = () =>{
        let userMenu = document.querySelector('.user-menu');
        userMenu.style.display = 'none';
    }
    return (
        
            <header>
                <Link to="/" exact='true' className="logo"><FontAwesomeIcon icon={faWallet} />Wallet App</Link>
                <nav className="navbar">
                    <Link className="active" to="#home">home</Link> 
                    <Link to="#Balance">balance</Link>
                    <Link to="#last-operations">last operations</Link>
                </nav>
                <div className="icons">
                    <FontAwesomeIcon icon={faBars} id="menu-bars"/>
                    <FontAwesomeIcon icon={faSearch} id="search-icon"/>
                    <div className="icon-user" onMouseOver={displayMenu}>
                        <img src={props.login.avatar} alt="user-avatar" className="user-image-header"/>
                    </div>
                    <div className="user-menu" onMouseLeave={hiddenMenu}>
                        <ul type='none'>
                            <li><Link to="/users/account/" className='options-user'>Edit Account</Link></li>
                            <li>
                                <form action="http://localhost:3001/users/logout" >
                                    <button type='submit' className='logout-user'><h4>Logout</h4></button>
                                </form>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        
    )
}

export default UserLoginHome;