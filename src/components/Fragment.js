import React from 'react'
import {moveFragment} from '../actions'
import C from '../constants'
//import './Fragment.css'

const Fragment = ({store, fragment}) => {

    // for styles see https://stackoverflow.com/questions/2296097/making-an-svg-image-object-clickable-with-onclick-avoiding-absolute-positioning

    const requestMove = e => {
        e.preventDefault()
        store.dispatch(moveFragment(fragment.id))
    }

    const x = (C.GRID_WIDTH / C.GRID_COLUMNS) * (fragment.position.col - 1)
    const y = (C.GRID_HEIGHT / C.GRID_ROWS) * (fragment.position.row - 1)
    const image = require('../assets/img/' + fragment.img) // TODO decrease img file size for faster loading

    console.log("Building Fragment with id: " + fragment.id + " at position: " 
        + JSON.stringify(fragment.position) + " with image " + fragment.img 
        + " at @x=" + x + " and @y=" + y)

    return (
        <g className="fragment">
            <image href={image} height="25%" width="25%" x={x} y={y} />
            <rect  x={x} y={y} width="10" height="10" onClick={requestMove} />
        </g>
    )

}

export default Fragment

