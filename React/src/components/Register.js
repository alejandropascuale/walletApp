import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'

import Header from './header/Header';
import FormSearch from './FormSearch';
import Footer from './Footer';
import Validations from './Validations';



function Register() {
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
        } else if (userSearch){
            setErrors({email: 'The email already exists'});
        } else {
            setErrors({});
            setDataLogin(true);
        }
    }
    useEffect( () => {
        if(Object.keys(errors).length === 0 && dataLogin){
            let loginForm = document.querySelector('#register-form');
            loginForm.submit();
        }
    })

    return (
        <>        
            <Header />
            <FormSearch />
            <main>

                <form className="register-form" action="http://localhost:3001/users/register" method="POST" id='register-form'>
                    <h2 className="title-form">Register</h2>
                    <div className="format-form">
                    <label htmlFor="email">Email</label>
                    <input className={errors.email? 'style-input is-invalid': 'style-input'} value={values.email} onChange={handleChange} type="email" name="email" id="email" />
                    {errors.email && <p className='text-danger'>{errors.email}</p>}

                    <label htmlFor="password">Password</label>
                    <input className={errors.email? 'style-input is-invalid': 'style-input'} value={values.password} onChange={handleChange} type="password" name="password" id="password" autoComplete='on' />
                    {errors.password && <p className='text-danger'>{errors.password}</p>}

                    </div>
                    <Link className="btn-cancel" type='button' to="/">Back</Link>
                    <button onClick={handleFromSubmit} className="button-check" type="submit">Send</button>
                </form>
            </main>
            <Footer />
        </>
    )
}

export default Register;