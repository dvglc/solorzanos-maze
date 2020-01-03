import React from 'react'
import {moveFragment} from '../actions'
//import C from '../constants'

const Fragment = ({store, fragment}) => {

    const requestMove = e => {
        e.preventDefault()
        store.dispatch(moveFragment(fragment.id))
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
            <image href={image} x={x} y={y} width="1" height="1" />
            <rect fillOpacity="0" x={x} y={y} width="1" height="1" onClick={requestMove} />
        </g>
    )
}

export default Fragment
