import React from 'react'
import './Header.css'
import {restartGame} from '../actions'


const Header = ({store}) => {

    if (store.getState().status.won) {
        // calculate time diff between beginning and end
        const begin = new Date(store.getState().status.begin)
        console.log('Begin date is ', begin)
        const end = new Date()
        console.log('End date is ', end)
        const beginUTC = Date.UTC(begin.getFullYear(), begin.getMonth(), begin.getDate(), begin.getHours(), begin.getMinutes(), begin.getSeconds())
        const endUTC = Date.UTC(end.getFullYear(), end.getMonth(), end.getDate(), end.getHours(), end.getMinutes(), end.getSeconds())
        const timeDiffStr = new Date(endUTC - beginUTC).toISOString().substr(11, 8);
        
        const winMsg = `
        You won!
        Total time: ${timeDiffStr}
        ---
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