import C from './constants'
import { store } from './index'
import { positionsEqual } from './store/utils'


/**
 * Creates an action to move a fragment.
 * @param {*} id The id of the fragment to be moved 
 */
export const moveFragment = (fragment) => ({
    type: C.MOVE_FRAGMENT,
    id: fragment.id,
    fromPosition: fragment.position,
    toPosition: store.getState().blank.position,
    toCorrectPosition: positionsEqual(fragment.finalPosition, store.getState().blank.position),
    fromCorrectPosition: positionsEqual(fragment.finalPosition, fragment.position),
    timestamp: new Date().toString()
})


// use old target from state as position, like so:
// store.dispatch( moveFragment(id, store.getState().target) )