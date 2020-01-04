import C from '../constants'
import { isMovable } from './utils'

export const fragment = (state={}, action) => {
    switch (action.type) {
        case C.MOVE_FRAGMENT:
            return (state.id === action.id) ?
                {
                    ...state,
                    position: action.toPosition,
                    timestamp: action.timestamp
                } : (isMovable(state.position, action.fromPosition)) ?
                    {
                        ...state,
                        movable: true
                    } :
                        {
                            ...state,
                            movable: false
                        }
        default: 
            return state 
    }
}

export const fragments = (state=[], action) => {
    switch (action.type) {
        case C.MOVE_FRAGMENT:
            return state.map(
                f => fragment(f, action)
            )
        default:
            return state
        }
}

export const blank = (state={}, action) => {
    switch (action.type) {
        case C.MOVE_FRAGMENT:
            return {
                ...state,
                position: action.fromPosition
            }
        default: 
            return state 
    }
}
