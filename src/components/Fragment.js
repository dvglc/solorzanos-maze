import React from 'react'
import {moveFragment} from '../actions'

const Fragment = ({store, fragment}) => {

    const requestMove = e => {
        e.preventDefault()
        store.dispatch(moveFragment(fragment.id))
    }

    let _style = {
        fillOpacity: 0
    }

    const highlight = e => {
        fragment.movable ? e.target.style.fill="blue" : e.target.style.fill="red" 
        e.target.style.fillOpacity=0.25
    }
    const lowlight = e => {
        e.target.style.fillOpacity=0
    }

    const x = fragment.position.col - 1
    const y = fragment.position.row - 1
    
    const image = require('../assets/img/' + fragment.img) 
    // TODO decrease img file size (ideally, < 10000 bytes) for faster loading

    console.log("Building Fragment with id: " + fragment.id + " at position: " 
        + JSON.stringify(fragment.position) + " with image " + fragment.img 
        + " at @x=" + x + " and @y=" + y)

    return (
        <g className="fragment">
            <image href={image} x={x} y={y} width="1" height="1"/>
            <rect x={x} y={y} width="1" height="1" style={_style} onMouseOver={highlight} onMouseOut={lowlight} onClick={requestMove} />
        </g>
    )
}

export default Fragment
