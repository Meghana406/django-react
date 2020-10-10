import React from "react"

import FlashMessage from "./flash_message"
import NavigationBar from "./navigation_bar.js"

class Main extends React.Component{
    render(){
        return (
            <div className="container">
                <NavigationBar {...this.props}/>
                {this.props.flashMessage.messageType && this.props.flashMessage.message &&
                <FlashMessage {...this.props} />}
                {React.cloneElement(this.props.children, this.props)}
            </div>
        )
    }
}

Main.prototypes = {
    addFlashMessage: React.PropTypes.func.isRequired,
    removeFlashMessage: React.PropTypes.func.isRequired,
    addSignUpErrors: React.PropTypes.func.isRequired,
    removeSignUpErrors: React.PropTypes.func.isRequired,
    createAccount: React.PropTypes.func.isRequired,
    authenticate: React.PropTypes.func.isRequired,
    logIn: React.PropTypes.func.isRequired,
    getUserInfo: React.PropTypes.func.isRequired,
    logOut: React.PropTypes.func.isRequired,
    auth: React.PropTypes.object.isRequired,
    flashMessage: React.PropTypes.object.isRequired,
    signUpErrors: React.PropTypes.object.isRequired
}

export default Main
