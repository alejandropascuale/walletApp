import React from 'react';
import {Link} from 'react-router-dom'

import Header from './header/Header';
import FormSearch from './FormSearch';
import Footer from './Footer';



function Login() {
    return (
        <>        
            <Header />
            <FormSearch />
            <main>

                <form className="register-form" action="http://localhost:3001/users/register" method="POST">
                    <h2 className="title-form">Register</h2>
                    <div className="format-form">
                    <label htmlFor="email">Email</label>
                    <input className='style-input' type="email" name="email" id="email" />
                    
                    <label htmlFor="password">Password</label>
                    <input className='style-input' type="password" name="password" id="password" autoComplete='on' />
                    
                    </div>
                    <Link className="btn-cancel" type='button' to="/">Back</Link>
                    <button className="button-check" type="submit">Send</button>
                </form>
            </main>
            <Footer />
        </>
    )
}

export default Login;