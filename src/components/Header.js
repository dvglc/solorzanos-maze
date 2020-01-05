import React from 'react'
import './Header.css'
import {restartGame} from '../actions'


const Header = ({store}) => {
    const moves = store.getState().status.moves
    const correctFragments = store.getState().status.correctFragments
    // correctColor = (correctFragments > 0) : 'green'
    return (
        <div className="Header">
            <div className="moves">Moves: {moves}</div>
            <div className="correct" style={{color: (correctFragments > 0) ? 'green' : 'black'}}>Correctly positioned fragments: {correctFragments}</div>
            <button onClick={() => store.dispatch(restartGame())}>NEW GAME!</button>
        </div>
    )
    
}

export default Header