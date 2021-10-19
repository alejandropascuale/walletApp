import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom'


import Header from './header/Header'
import Footer from './Footer'


function UserAccount() {
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
    return (
        <>
        <Header />
        <main>
            <form className="register-form" action="/users/account/?_method=PUT" method="POST" encType="multipart/form-data">
                <div className="align-image-user">
                    <img src={user.avatar} alt="user-avatar" className="user-image" />
                </div>
                <div className="top-form">
                    <h2 className="title-form">Edit Account</h2>
                </div>
                <div className="format-form">
                    <label htmlFor="avatar">Avatar</label>
                    <input className="style-input" type="file" name="avatar" id="avatar" />
                    <label htmlFor="email">Email</label>
                    <input className="style-input" type="email" name="email" id="email" value={user.email} />
                    
                    
                    <label htmlFor="password">Password</label>
                    <input className="style-input" type="password" name="password" id="password" autoComplete='on' />
                    
                </div>
                <Link to="/users/delete/" type="menu" className="btn-cancel" id="delete-user">Delete User</Link>
                <Link to="/" type="menu" className="btn-cancel">Back</Link>
                <button className="btn-check" type="submit">Edit</button>      
            </form>
        </main>
        <Footer />
        </>
    )
}

export default UserAccount