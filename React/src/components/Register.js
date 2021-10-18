import React from 'react';

import Header from './Header';
import FormSearch from './FormSearch';
import Footer from './Footer';



function Login() {
    return (
        <>        
            <Header />
            <FormSearch />
            <body>
                <main>

                    <form className="register-form" action="/users/register" method="POST">
                        <h2 className="title-form">Register</h2>
                        <div className="format-form">
                        <label for="email">Email</label>
                        <input type="email" name="email" id="email" />
                        
                        <label for="password">Password</label>
                        <input type="password" name="password" id="password" />
                        
                        </div>
                        <a className="btn-cancel" href="/">Back</a>
                        <button className="btn-check" type="submit">Send</button>
                    </form>
                </main>
        
            </body>
            <Footer />
        </>
    )
}

export default Login;