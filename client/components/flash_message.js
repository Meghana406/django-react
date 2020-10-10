import React from "react"
import classnames from "classnames"

class FlashMessage extends React.Component{
    constructor(){
        super();
        this.handleOnClick = this.handleOnClick.bind(this)
    }
    handleOnClick(){
        this.props.removeFlashMessage()
    }
    render(){
        return (
        <div className={classnames("alert", {
            "alert-success": this.props.flashMessage.messageType === "success",
            "alert-danger": this.props.flashMessage.messageType === "failure"
        })}> 
        {this.props.flashMessage.message}
        <button onClick={this.handleOnClick}className="close"><span>&times;</span></button>
        </div>
        )
        
    }
}

export default FlashMessage