import {combineReducers} from "redux"
import {routerReducer} from "react-router-redux"

import authReducer from './auth_reducer'
import flashMessageReducer from './flash_message_reducer'
import signUpReducer from './sign_up_reducer'
const rootReducer = combineReducers({
    auth: authReducer, 
    flashMessage: flashMessageReducer, 
    signUp: signUpReducer, 
    routing: routerReducer
})
export default rootReducer
