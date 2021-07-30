import React from 'react'
import './Footer.css'
import { images } from '../../helpers/constants'

const Footer = () => {

    const { githubFooter, linkedinFooter } = images.contact

    return (
        <div className="footerContainer">
            <div className="container">
                <a className="footerContact" href={linkedinFooter.url}>
                    <img src={linkedinFooter.img} alt="Linkedin" /> 
                </a>
                <a className="footerContact" href={githubFooter.url}>
                    <img src={githubFooter.img} alt="Github" /> 
                </a>
            </div>
        </div>
    )
}

export default Footer
