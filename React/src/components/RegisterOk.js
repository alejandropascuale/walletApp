import React from 'react'
import {Link} from 'react-router-dom'
import Header from './header/Header'
import Footer from './Footer'

export default function RegisterOk() {
    return (
        <>
            <Header />
            <main>
                <form className="register-form" action="/users/login">
                    <h1 className="title-form">¡Tu registro ha sido exitoso!</h1>
                    <Link className="btn-cancel" to="/">Back</Link>
                    <Link className="button-check" to='/users/login'>Login</Link>
                </form>
            </main>
            <Footer />
        </>
    )
}
