import C from '../constants'

export const fragment = (state={}, action) => {
    switch (action.type) {
        case C.MOVE_FRAGMENT:
            return (state.id !== action.id) ?
                state :
                    {
                        ...state,
                        targetPosition: action.position,
                        timestamp: action.timestamp
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
            return action.newBlank
        default: 
            return state 
    }
}
