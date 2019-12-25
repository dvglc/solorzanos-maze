import React from 'react'
import {moveFragment} from '../actions'
import C from '../constants'

const Fragment = ({store, fragment}) => {

    const requestMove = e => {
        e.preventDefault()
        store.dispatch(moveFragment(fragment.id))
    }

    const x = (C.GRID_WIDTH / C.GRID_COLUMNS) * (fragment.position.col - 1)
    const y = (C.GRID_HEIGHT / C.GRID_ROWS) * (fragment.position.row - 1)
    const rectStyle = {

    }


    const image = require('../assets/img/' + fragment.img) 
    // TODO decrease img file size (ideally, < 10000 bytes) for faster loading

    console.log("Building Fragment with id: " + fragment.id + " at position: " 
        + JSON.stringify(fragment.position) + " with image " + fragment.img 
        + " at @x=" + x + " and @y=" + y)

    return (
        <g className="fragment">
            <image href={image} x={x} y={y} height={C.FRAGMENT_HEIGHT} width={C.FRAGMENT_WIDTH} />
            <rect fillOpacity="0" x={x} y={y} height={C.FRAGMENT_HEIGHT} width={C.FRAGMENT_WIDTH} onClick={requestMove} />
        </g>
    )
}

export default Fragment
