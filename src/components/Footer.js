import React, {useEffect} from 'react'
import C from '../constants'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faFileImage } from '@fortawesome/free-solid-svg-icons'
import { enableDevMode, winGame } from '../actions'


const Footer = ({store}) => {

    let clicks = 0
    const magicClick = () => {
        clicks++
        if (clicks === 7) {
            clicks = 0
            store.dispatch(enableDevMode())
        }
    }

    useEffect(() => {
        // this is where we trigger a success event in case all fragments are correctly positioned
        if (store.getState().status.correctFragments === store.getState().fragments.length 
            && store.getState().status.correctFragments % 2 === 1) { // make sure we dispatch only when the game isn't already won
            store.dispatch(winGame())
        }
    })

    return (
        <div className="Footer">
            <div className="about"><span>{C.NAME} </span><span onClick={magicClick}>({C.VERSION})</span></div>
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
