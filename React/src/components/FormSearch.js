import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'


function FormSearch() {
    return (
        <form action="" id="search-form">
            <input type="search" placeholder="Search by ammount, date, type..." name="" id="search-box"/>
            <label for="search-box" className="fas fa-search"></label>
            <FontAwesomeIcon icon={faTimes} id="close"/>
        </form> 
    )
}

export default FormSearch;