//React library
import React from 'react'
import {Link} from 'react-router-dom'

//Style & Css
import '../styles/Header.css'

function Header() {
    return (

        <div className="header">
            <Link to="/" className="title">
            Intuitive Quiz PAIJO
            <hr className="divider"/>
            </Link>
        </div>
    )
}

export default Header
