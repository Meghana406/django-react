function flashMessageReducer(state=[], action){
    switch(action.type){
        case "ADD_FLASH_MESSAGE":
            return Object.assign({}, state, {
                messageType: action.messageType, 
                message: action.message
            })
        case "REMOVE_FLASH_MESSAGE": 
            return Object.assign({}, state, {
                messageType: null,
                message: null
            })
        default: 
            return state
    }
}

export default flashMessageReducer