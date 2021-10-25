import React, { useContext } from 'react';

import UserLoginHome from './UserLoginHome'
import GuestHome from './GuestHome'

import { UserContext } from '../../App';


function Header() {
    const {userLogin} = useContext(UserContext);
    
    if(userLogin && typeof userLogin != 'undefined'){
        return (
            <UserLoginHome />
        )
    } else {
        return (
            <GuestHome />
        )
    }
}

export default Header;