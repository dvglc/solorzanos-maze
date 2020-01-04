import C from './constants'
import { isMovable } from './store/utils'
import { store } from './index'


/**
 * Creates an action to move a fragment (if the fragment is movable).
 * @param {*} id the id of the fragment to be moved 
 */
export const moveFragment = (fragmentId) => {
    const from = '' // TODO get current position of fragment with id via click event or context
    const to = '' // store.getState().target
    return (isMovable(from, to)) ?
        ({
            type: C.MOVE_FRAGMENT,
            id: fragmentId,
            newBlank: from,
            targetPosition: to,
            timestamp: new Date().toString()
        }) : 
        ({
            type: C.MSG_UNMOVABLE_FRAGMENT
        })    
}

// use old target from state as position, like so:
// store.dispatch( moveFragment(id, store.getState().target) )