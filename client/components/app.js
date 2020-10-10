import {bindActionCreators} from "redux"
import {connect} from 'react-redux'
import * as actionCreators from '../actions/action_creators'
import Main from './main'

function mapStateToProps(state){
    return {
        auth: state.auth,
        flashMessage: state.flashMessage,
        signUp: state.signUp
    }
}

function mapDispachToProps(dispatch){
    return bindActionCreators(actionCreators, dispatch)
}
const App = connect(mapStateToProps, mapDispachToProps)(Main)

export default App
