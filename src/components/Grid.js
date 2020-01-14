import React from 'react'
import Fragment from './Fragment'
import C from '../constants'
import './Grid.css'
import {winGame} from '../actions'


const Grid = ({store}) => {

    // this is where we trigger a success event in case all fragments are correctly positioned
    if (store.getState().status.correctFragments === store.getState().fragments.length 
        && store.getState().status.correctFragments % 2 === 1) { // make sure we dispatch only when the game isn't already won
        store.dispatch(winGame())
    } 
    
    return (
        <div className="Grid">
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
                width={C.GRID_WIDTH} height={C.GRID_HEIGHT} viewBox={'0 0 ' + C.GRID_COLUMNS + ' ' + C.GRID_ROWS}>
                {store.getState().fragments.map((f,i) => <Fragment store={store} key={i} fragment={f} />)}
            </svg>
        </div>
    )
}


export default Grid
