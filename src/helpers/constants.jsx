// Iconos //

import html from '../assets/images/html-icon.png'
import css from '../assets/images/css3-icon.png'
import bootstrap from '../assets/images/bootstrap-icon.png'
import javascript from '../assets/images/javascript-icon.png'
import react from '../assets/images/react-icon.png'
import typescript from '../assets/images/typescript-icon.png'
import github from '../assets/images/github-icon.png'
import githubFooter from '../assets/images/github-footer-icon.png'
import linkedin from '../assets/images/linkedin-icon.png'
import linkedinFooter from '../assets/images/linkedin-footer-icon.png'
import gmail from '../assets/images/gmail-icon.png'

// Proyectos //

import atom from '../assets/images/atom.jpg'
import calculadora from '../assets/images/calculadora.jpeg'
import cassette from '../assets/images/cassette.jpg'
import cubeMove from '../assets/images/cubeMove.png'
import deadmau5 from '../assets/images/deadmau5.png'
import pronunciation from '../assets/images/pronunciation.jpeg'
import kenjinux from '../assets/images/kenjinux.png'
import kenCoin from '../assets/images/kenCoin.jpeg'
import randomPage from '../assets/images/randomPage.jpg'
import spaceInvader from '../assets/images/spaceInvader.jpg'

// Experiencia //
import logoEmergencias from '../assets/images/logoEmergencias.png'
import logoBoreal from '../assets/images/logoBoreal.svg'


export const urls = Object.freeze({
    linkedinUrl: 'https://www.linkedin.com/in/kenji-arakaki/',
    githubUrl: 'https://github.com/kenji1993',
    projects: {
        randomPage: {
            url: 'https://randompage1993.web.app/',
            github: 'https://github.com/kenji1993/RandomPage'
        },
        kenjinux: {
            url: 'https://kenjinux.web.app/',
            github: 'https://github.com/kenji1993/kenjinux'
        },
        pronunciation: {
            url: 'https://pronunciation.vercel.app/',
            github: 'https://github.com/kenji1993/pronunciation'
        },
    },
    css: {
        cubo3d: {
            name: 'Cubo 3D',
            github: 'https://github.com/kenji1993/square3d'
        },
        deadmau5: {
            name: 'Deadmau5',
            github: 'https://github.com/kenji1993/deadmau5'
        },
        atomo: {
            name: 'Atomo CSS',
            github: 'https://github.com/kenji1993/AtomoCSS'
        },
        spaceInvader: {
            name: 'Space Invader',
            github: 'https://github.com/kenji1993/space-invader-css'
        },
        cassette: 'Cassette',
        github: 'https://github.com/kenji1993/cassetteCSS'
    }
})



export const images =  Object.freeze({
    knowledge: {
        html,
        css,
        bootstrap,
        javascript,
        react,
        typescript
    },
    contact: {
        github: {
            url: urls.githubUrl,
            img: github
        },
        githubFooter: {
            url: urls.githubUrl,
            img: githubFooter,
        },
        linkedin: {
            url: urls.linkedinUrl,
            img: linkedin
        },
        linkedinFooter: {
            url: urls.linkedinUrl,
            img: linkedinFooter
        },
        gmail
    },
    cssGalery: {
        atom,
        cassette,
        cubeMove,
        deadmau5,
        spaceInvader
    },
    projects: {
        randomPage,
        kenjinux,
        pronunciation
    },
    reactNative: {
        calculadora,
        kenCoin
    },
    experience: {
        logoBoreal,
        logoEmergencias,
    }
})

