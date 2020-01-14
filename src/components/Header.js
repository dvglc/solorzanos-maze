import React from 'react'
import './Header.css'
import {restartGame} from '../actions'


const Header = ({store}) => {

    if (store.getState().status.won) {
        const winMsg = `
        You won!
        Total moves: ${store.getState().status.moves}
        Misclicks: ${store.getState().status.misclicks}
        `
        alert(winMsg);
    } 

    return (
        <div className="Header">
            <div className="moves">
                {`Moves: ${store.getState().status.moves}`}
            </div>
            <div className="correct" style={{color: (store.getState().status.correctFragments > 0) ? 'green' : 'black'}}>
                {store.getState().status.won ? 'GAME OVER' : `Correct fragments: ${store.getState().status.correctFragments}/15`}    
            </div>
            <button onClick={() => store.dispatch(restartGame())}>NEW GAME!</button>
        </div>
    )
    
}

export default Header