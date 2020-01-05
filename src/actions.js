import C from './constants'
import { store } from './index'
import { positionsEqual } from './store/utils'
import { initializeState } from './store/initialState'


/**
 * Creates an action to move a fragment.
 * @param {*} fragment The fragment to be moved 
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

/**
 * Creates an action representing a misclick.
 */
export const misclick = () => ({
    type: C.MISCLICK,
    timestamp: new Date().toString()
})

/**
 * Restarts a game through reinitializing the state.
 */
export const restartGame = () => ({
    type: C.RESTART_GAME,
    newState: initializeState(),
    timestamp: new Date().toString()
})
