import React from 'react'
import './PopUp.css'
import { faTrophy } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { restartGame } from '../actions'

export const PopUp = ({store}) => {

    if (store.getState().status.won) {
        // calculate time diff between beginning and end
        const begin = new Date(store.getState().status.begin)
        const end = new Date()
        const beginUTC = Date.UTC(begin.getFullYear(), begin.getMonth(), begin.getDate(), begin.getHours(), begin.getMinutes(), begin.getSeconds())
        const endUTC = Date.UTC(end.getFullYear(), end.getMonth(), end.getDate(), end.getHours(), end.getMinutes(), end.getSeconds())
        const timeDiffStr = new Date(endUTC - beginUTC).toISOString().substr(11, 8);
        
        return ( 
             <div className="Popup">
                <h1><FontAwesomeIcon icon={faTrophy} /> You won!</h1>
                <div>
                    <span>{`Total time: ${timeDiffStr}`}</span><br/>
                    <span>{`Total moves: ${store.getState().status.moves}`}</span><br/>
                    <span>{`Misclicks: ${store.getState().status.misclicks}`}</span>
                </div>
                <br/>
                <button onClick={() => store.dispatch(restartGame())}>Start a new game</button>
            </div> 
        )
    } 
    else return null

}

export default PopUp