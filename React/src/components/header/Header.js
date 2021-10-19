import React, { useState, useEffect} from 'react';

import UserLoginHome from './UserLoginHome'
import GuestHome from './GuestHome'


function Header() {
    const [user, setUser] = useState([]);
    useEffect(()=>{
    fetch('http://localhost:3001/api/users')
        .then(response => response.json())
        .then(data => {
          function getCookie(cname) {
            let name = cname + "=";
            let decodedCookie = decodeURIComponent(document.cookie);
            let ca = decodedCookie.split(';');
            for(let i = 0; i <ca.length; i++) {
                let c = ca[i];
                while (c.charAt(0) === ' ') {
                c = c.substring(1);
                }
                if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
                }
            }
            return "";
          }
          let emailCookie = getCookie('userEmail');
          const userLogged = data.find(u => u.email === emailCookie);
          setUser(userLogged);
        })
    }, [])
    if(user && typeof user != 'undefined'){
        return (
            <UserLoginHome login={user} />
        )
    } else {
        return (
            <GuestHome />
        )
    }
}

export default Header;