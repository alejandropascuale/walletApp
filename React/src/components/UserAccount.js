import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom'
import { UserContext } from '../App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, ModalBody} from 'reactstrap'

import Header from './header/Header'
import Footer from './Footer'


function UserAccount() {
    const {userLogin, setUserLogin} = useContext(UserContext);
    const [ModalEliminar, setModalEliminar] = useState (false);

    const handleChange = e => {
        const {name, value} = e.target;
        setUserLogin((prevState)=>({
        ...prevState,
        [name]: value
        }))
    }

    const openModalDelete = () => {
        setModalEliminar(true)
    }

    return (
        <>
        <Header />
        <main>
            <form className="register-form" action="http://localhost:3001/users/account/?_method=PUT" method="POST" encType="multipart/form-data">
                <div className="align-image-user">
                    <img src={userLogin.avatar} alt="user-avatar" className="user-image" />
                </div>
                <div className="top-form">
                    <h2 className="title-form">Edit Account</h2>
                </div>
                <div className="format-form">
                    <label htmlFor="avatar">Avatar</label>
                    <input className="style-input" type="file" name="avatar" id="avatar" />
                    <label htmlFor="email">Email</label>
                    <input className="style-input" type="email" name="email" id="email" value={userLogin.email} onChange={handleChange}/>
                    
                    
                    <label htmlFor="password">Password</label>
                    <input className="style-input" type="password" name="password" id="password" autoComplete='on' />
                    
                </div>
                <button onClick={() => openModalDelete()} type="button" className="btn-cancel" id="delete-user">Delete User</button>
                <Modal isOpen={ModalEliminar}>
                    <ModalBody>
                        <h2 className='edit-title-form'>
                        Are you sure to delete the user {userLogin.email}?
                        </h2>
                        <form className="edit-operations-form" id="edit-operations-form" action={`http://localhost:3001/users/delete/`}>
                        <button className='btn btn-secondary'
                        onClick={() => setModalEliminar(false)}
                        type='button'
                        >Cancel
                        </button>

                        <button className='btn btn-danger'
                        type='submit'
                        >Yes
                        </button>
                        </form>

                    </ModalBody>
                </Modal>
                <Link to="/" type="menu" className="btn-cancel">Back</Link>
                <button className="btn-check" type="submit">Edit</button>      
            </form>
        </main>
        <Footer />
        </>
    )
}

export default UserAccount