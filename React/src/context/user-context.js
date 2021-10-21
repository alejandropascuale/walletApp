import React, { useState, useEffect, useMemo } from 'react'

const UserContext = React.createContext();

export function UserProvider(props) {
    const [user, setUser] = useState(null);
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
    })

    const value = useMemo(()=>{
        return ({
            user
        })
    }, [user])
    return <UserProvider.Provider value={value} {...props} />
}

export function useUser () {
    const context = React.useContext(UserContext);
    if(!context) {
        throw new Error('useUser debe estar dentro del proveedor UserContext')
    }
    return context
}
