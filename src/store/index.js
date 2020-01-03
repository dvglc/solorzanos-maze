import { 
    createStore, 
    combineReducers,
    applyMiddleware
} from 'redux'
import { fragments, blank } from './reducers'
import stateData from './initialState'

const logger = store => next => action => {
    let result
    console.groupCollapsed('dispatching', action.type)
    console.log('prev state', store.getState())
    console.log('action', action)
    result = next(action)
    console.log('next state', store.getState())
    console.groupEnd()
    return result
}

const saver = store => next => action => {
    let result = next(action)
    localStorage['redux-store'] = JSON.stringify(store.getState())
    return result
}

// when initializing, explicitly set local storage to stateData, otherwise position fields might have values from previous runs;
// alternatively we could also tell the browser to flush its cache when a new store is factored
localStorage['redux-store'] = JSON.stringify(stateData) //TODO make this part of storeFactory() for reshuffling 
const storeFactory = (initialState=stateData) =>
    applyMiddleware(logger, saver)(createStore)(
        combineReducers({fragments, blank}),
        (localStorage['redux-store']) ?
            JSON.parse(localStorage['redux-store']) :
            initialState
    )

export default storeFactory
