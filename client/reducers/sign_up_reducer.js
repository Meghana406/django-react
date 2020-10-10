function signUpReducer(state=[], action){
    switch(action.type){
        case "SIGN_UP_FAILURE":
            return Object.assign({}, state, {
                errors: action.errors 
            })
        case "CLEAR_SIGN_UP_ERRORS":
            return Object.assign({}, state, {
                errors:  {email: null, first_name: null, last_name: null, password: null}
            })
        default: 
            return state
    }
}

export default signUpReducer