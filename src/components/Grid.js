import React from 'react'
import Fragment from './Fragment'
import C from '../constants'


const Grid = ({store}) => 
    <div className="grid">
        <svg width={C.GRID_WIDTH} height={C.GRID_HEIGHT} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">  
            {store.getState().fragments.map((f, i) => <Fragment store={store} key={i} fragment={f} />)}
        </svg>
    </div>


export default Grid
