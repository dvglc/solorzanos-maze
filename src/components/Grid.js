import React from 'react'
import Fragment from './Fragment'
import C from '../constants'


const Grid = ({store}) => {

    console.log('Blank fragment is ' + C.BLANK_FRAGMENT + ' at position ' + JSON.stringify(store.getState().blank))

    return (
        <div className="grid">
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
                width={C.GRID_WIDTH} height={C.GRID_HEIGHT} viewBox={'0 0 ' + C.GRID_COLUMNS + ' ' + C.GRID_ROWS}>  
                {
                store.getState().fragments
                    .filter(f => f.id !== C.BLANK_FRAGMENT)
                    .map((f,i) => <Fragment store={store} key={i} fragment={f} />)
                }            
            </svg>
        </div>
    )
}
    



export default Grid
