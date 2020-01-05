import React from 'react'
import {moveFragment} from '../actions'

const Fragment = ({store, fragment}) => {

    const requestMove = e => {
        e.preventDefault()
        if (fragment.movable) store.dispatch(moveFragment(fragment)) 
        else alert('Fragment is not movable!')
    }

    let _style = {
        fillOpacity: 0
    }

    const highlight = e => {
        fragment.movable ? e.target.style.fill="blue" : e.target.style.fill="red" 
        e.target.style.fillOpacity = 0.25
    }
    const lowlight = e => e.target.style.fillOpacity = 0
    
    const image = require('../assets/img/' + fragment.img) 
    // TODO decrease img file size (ideally, < 10000 bytes) for faster loading

    // console.log("Building Fragment with id: " + fragment.id + " at position: " 
    //     + JSON.stringify(fragment.position) + " with image " + fragment.img 
    //     + " at @x=" + fragment.position.col + " and @y=" + fragment.position.row)

    return (
        <g className="fragment">
            <image href={image} x={fragment.position.col} y={fragment.position.row} width="1" height="1"/>
            <rect x={fragment.position.col} y={fragment.position.row} width="1" height="1" 
                style={_style} onMouseOver={highlight} onMouseOut={lowlight} onClick={requestMove} />
        </g>
    )
}

export default Fragment
