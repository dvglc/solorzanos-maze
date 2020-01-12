import React from 'react'
import {moveFragment, misclick} from '../actions'

const Fragment = ({store, fragment}) => {

    const requestMove = e => {
        e.preventDefault()
        if (fragment.movable) {
            store.dispatch(moveFragment(fragment))
        }  
        else {
            store.dispatch(misclick())
            //alert('Fragment is not movable!')
        } 
    }

    const renderClass = (fragment.correct && fragment.movable) ? 'correctmovable' : (fragment.correct) ? 'correct' : (fragment.movable) ? 'movable' : 'none'
    
    const image = require('../assets/img/' + fragment.img) 
    // TODO decrease img file size (ideally, < 10000 bytes) for faster loading

    return (
        <g className="Fragment">
            <image href={image} x={fragment.position.col} y={fragment.position.row} width="1" height="1"/>
            <rect className={renderClass} x={fragment.position.col} y={fragment.position.row} width="1" height="1" 
                 onClick={requestMove} />
        </g>
    )
}

export default Fragment