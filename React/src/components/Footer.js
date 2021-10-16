import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'


function Footer() {
    return (
        <footer>
            <div className="made-by">
                <h1>Made with <FontAwesomeIcon icon={faHeart} /> by Alejandro Pascuale</h1>
                <h2 className="rights">©2021</h2>
            </div>
        </footer>
    )
}

export default Footer;