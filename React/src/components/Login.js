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
            <body>
            <main>

                <form className="register-form" action="/users/login" method="POST">
                    <div className="top-form">
                        <h2 className="title-form">Login</h2>
                        <a href="/"><i className="fas fa-times"></i></a>
                    </div>
                    <div className="format-form">
                        <label for="email">Email</label>
                        <input className="<%= locals.errors && errors.email? 'is-invalid style-input' : 'style-input' %>" type="email" name="email" id="email" 
                        value="" />
                        
                        <label for="password">Password</label>
                        <input className="<%= locals.errors && errors.password? 'is-invalid style-input' : 'style-input' %>" type="password" name="password" id="password" 
                        value="" />
                        
                    </div>
                    <button className="btn-check" type="submit"><FontAwesomeIcon icon={faSignInAlt} /></button>
                </form>
            </main>
        
            </body>
            <Footer />
        </>
    )
}

export default Login;