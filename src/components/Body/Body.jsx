import React from 'react'
import Knowledge from '../Knowledge/Knowledge'
import './Body.css'

const Body = () => {
    return (
        <div className="bodyContainer row">
            <span className="title">Frontend Developer</span> 
            <p className="about col-6">
                Hola mundo, mi nombre es Kenji, soy frontend developer. 
                Comencé mis estudios a mediados del 2019 con cursos de 
                UTN e-learning y distintas plataformas online. 
                Tengo experiencia laboral en React Native y un poco de 
                experiencia con React(web), Next js y un poco de Typescript.
            </p>
            <Knowledge/>
        </div>
    )
}

export default Body
