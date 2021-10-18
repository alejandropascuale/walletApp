import React from 'react';

import Header from './Header';
import FormSearch from './FormSearch';
import Footer from './Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons'



function Login() {
    return (
        <>        
            <Header />
            <FormSearch />
                <main>

                    <form className="register-form" action="http://localhost:3001/users/login" method="POST">
                        <div className="top-form">
                            <h2 className="title-form">Login</h2>
                            <a href="/"><i className="fas fa-times"></i></a>
                        </div>
                        <div className="format-form">
                            <label htmlFor="email">Email</label>
                            <input className='style-input' type="email" name="email" id="email"/>
                            
                            <label htmlFor="password">Password</label>
                            <input className='style-input' type="password" name="password" id="password" autoComplete='on' />
                            
                        </div>
                        <button className="btn-check" type="submit"><FontAwesomeIcon icon={faSignInAlt} /></button>
                    </form>
                </main>
            <Footer />
        </>
    )
}

export default Login;