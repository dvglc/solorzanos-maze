import React from 'react'
import C from '../constants'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faFileImage } from '@fortawesome/free-solid-svg-icons'
import { enableDevMode } from '../actions'
import { store } from '..'


const Footer = () => {

    let clicks = 0
    const magicClick = () => {
        clicks++
        console.log('Clicks=', clicks)
        if (clicks === 7) {
            clicks = 0
            store.dispatch(enableDevMode())
        }
    }

    return (
        <div className="Footer">
            <div className="about" onClick={magicClick}>{C.NAME} ({C.VERSION})</div>
            <div className="source">
                <a href={C.LINK} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /> Source Code</a>
            </div>
            <div className="facs">
                <a href={C.FACS_LINK} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFileImage} /> Original Facsimile</a>
            </div>
        </div>
    )
}
    


export default Footer
