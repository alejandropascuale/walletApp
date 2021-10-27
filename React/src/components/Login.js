import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'

import Header from './header/Header';
import FormSearch from './FormSearch';
import Validations from './Validations';
import Footer from './Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt, faTimes } from '@fortawesome/free-solid-svg-icons'

const bcrypt = require('bcryptjs');


function Login() {
    
    const [values, setValues] = useState(
        {
            email: '',
            password: ''
        }
    );

    const [errors, setErrors] = useState({});
    const [dataLogin, setDataLogin] = useState(false);

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name] : e.target.value
        })
    }
    const handleFromSubmit = async (event) => {
        event.preventDefault();

        const dataUser = {
            email: values.email,
            password: values.password
        }
        const usersArray = await (await fetch('http://localhost:3001/api/users')).json();
        const userSearch = usersArray.find(u => u.email === dataUser.email);
        const errorsFrontend = Object.keys(Validations(values)).length;
        if(errorsFrontend !== 0){
            setErrors(Validations(values));
        } else if (userSearch === undefined){
            setErrors({email: 'Check your email'});
        } else if (bcrypt.compareSync(dataUser.password, userSearch.password) === false) {
            setErrors({password: 'Check your password'});
        } else {
            setErrors({});
            setDataLogin(true);
        }
    }
    useEffect( () => {
        if(Object.keys(errors).length === 0 && dataLogin){
            let loginForm = document.querySelector('#login-form');
            loginForm.submit();
        }
    })

    return (
        <>        
            <Header />
            <FormSearch />
                <main>
                    <form className="register-form" id='login-form' action="http://localhost:3001/users/login" method="POST">
                        <div className="top-form">
                            <h2 className="title-form">Login</h2>
                            <Link to="/"><FontAwesomeIcon icon={faTimes} /></Link>
                        </div>
                        <div className="format-form">
                            <label htmlFor="email">Email</label>
                            <input className={errors.email? 'style-input is-invalid': 'style-input'} type="email" name="email" id="email" value={values.email} onChange={handleChange} />
                            {errors.email && <p className='text-danger'>{errors.email}</p>}

                            <label htmlFor="password">Password</label>
                            <input className={errors.password? 'style-input is-invalid': 'style-input'} type="password" name="password" id="password" autoComplete='on' value={values.password} onChange={handleChange} />
                            {errors.password && <p className='text-danger'>{errors.password}</p>}
                            
                        </div>
                        <button onClick={handleFromSubmit} className="button-check" type="submit"><FontAwesomeIcon icon={faSignInAlt} /></button>
                    </form>
                </main>
            <Footer />
        </>
    )
}

export default Login;