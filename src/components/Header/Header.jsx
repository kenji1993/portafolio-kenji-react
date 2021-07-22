import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import './Header.css'

const Header = () => {
    return (
        <>
            <div className="darkGreenLine"></div>
            <div  className="headerContainer">
                <Link className="author" to="/">
                 <h1>Kenji Arakaki</h1>
                </Link>
                <Navbar/> 
            </div>
        </>
    )
}

export default Header
