import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import  navLinks  from './navLinks'

const Navbar = () => {

    return (
        <ul className="headerNavbar">
            {
                navLinks.map(({name, redirect}, i) => 
                    <li 
                        key={i}
                        className="navLi"
                    >
                        <Link
                            to={redirect}
                            className="navLink"
                        >
                            {name}
                        </Link>
                    </li>
                )
            }
        </ul>
    )
}

export default Navbar
