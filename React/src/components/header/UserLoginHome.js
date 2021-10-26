import React, { useContext } from 'react';
import {Link} from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWallet, faBars, faSearch } from '@fortawesome/free-solid-svg-icons'

import { UserContext } from '../../App';


function UserLoginHome() {
    const {userLogin} = useContext(UserContext);

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
                <div className="icons">
                    <FontAwesomeIcon icon={faSearch} id="search-icon"/>
                    <div className="icon-user" onMouseOver={displayMenu}>
                        <img src={userLogin.avatar} alt="user-avatar" className="user-image-header"/>
                    </div>
                    <div className="user-menu" onMouseLeave={hiddenMenu}>
                        <ul type='none'>
                            <li><Link to="/users/account/" className='options-user'>Edit Account</Link></li>
                            <li>
                                <form action="http://localhost:3001/users/logout" >
                                    <button type='submit' className='logout-user'><h4 className='options-user'>Logout</h4></button>
                                </form>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        
    )
}

export default UserLoginHome;