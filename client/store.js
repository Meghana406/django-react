import {createStore, compose, applyMiddleware} from "redux"
import {createLogger} from "redux-logger"
import {syncHistoryWithStore, routerMiddleware} from "react-router-redux"
import {browserHistory} from "react-router"
import thunk from "redux-thunk"

import rootReducer from './reducers/index'
import setAuthorizationHeader from './utils/set_authorization_header'
import {verifyExistingToken} from './actions/action_creators.js'

const initialState = {
    auth: {
        token: null,
        id: null,
        email: null,
        first_name: null,
        last_name: null,
        isAuthenticated: null,
        isAuthenticating: null,
    },
    flashMessage: {messageType: null, message: null},
    signUp: {errors: {email: null, first_name: null, last_name: null, password: null}}
}

const enhancers = compose(
    applyMiddleware(thunk, createLogger(), routerMiddleware(browserHistory)),
    // For the react dev tools extension
    window.devToolsExtension ? window.devToolsExtension() : f => f
)

const store = createStore(rootReducer, initialState, enhancers)
export const history = syncHistoryWithStore(browserHistory, store)

if(localStorage.token){
    store.dispatch(verifyExistingToken(localStorage.token))
}
export default store


// Allows for hot reloading of reducers
if(module.hot){
    module.hot.accept('./reducers', () =>{
        const nextRootReducer = require('./reducers/index').default;
        store.replaceReducer(nextRootReducer)
    })
}
