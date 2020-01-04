import React from 'react'
import Fragment from './Fragment'
import C from '../constants'


const Grid = ({store}) => {

    // console.log('Blank fragment is ' + store.getState().blank.id + ' at position ' + JSON.stringify(store.getState().blank))
    // console.log('Movables are:')
    // store.getState().fragments.filter(f => f.movable).map(f => console.log(f.id + ' at position ' + JSON.stringify(f.position)))

    return (
        <div className="grid">
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
                width={C.GRID_WIDTH} height={C.GRID_HEIGHT} viewBox={'0 0 ' + C.GRID_COLUMNS + ' ' + C.GRID_ROWS}>  
                {
                store.getState().fragments.map((f,i) => <Fragment store={store} key={i} fragment={f} />)
                }
            </svg>
        </div>
    )
}
    



export default Grid
