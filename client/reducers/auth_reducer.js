function authReducer(state=[], action){
    switch(action.type){
        case "AUTHENTICATING":
        case "VERIFYING_TOKEN":
            return Object.assign({}, state, {
                isAuthenticating: true
            })
        case "AUTHENTICATED": 
        case "TOKEN_VERIFIED":
            return Object.assign({}, state, {
                isAuthenticating: false, 
                isAuthenticated: true,
                token: localStorage.getItem("token")
            })
        case "SET_USER_INFO":
            return Object.assign({}, state, {
                id: action.id,
                email: action.email,
                first_name: action.first_name,
                last_name: action.last_name
            }) 
        case "LOG_OUT":
            return Object.assign({}, state, {
                token: null,
                id: null,
                email: null,
                first_name: null,
                last_name: null,
                isAuthenticated: null,
                isAuthenticating: null,
            })
        default:
            return state 
    }
}

export default authReducer
