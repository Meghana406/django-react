import React from "react"
import {Link} from "react-router"
class NavigationBar extends React.Component{
    constructor(){
        super();
        this.handleLogOut = this.handleLogOut.bind(this)
    }
    handleLogOut(){
        this.props.logOut()
    }
    render(){
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                    </div>

                    {!this.props.auth.isAuthenticated &&
                    <div className="collapse navbar-collapse">
                    <ul className="nav navbar-nav navbar-right">
                        <li><Link to="/accounts/signup">Sign up</Link></li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <li><Link to="/accounts/login">Login</Link></li>
                    </ul>
                    </div>}

                    {this.props.auth.isAuthenticated &&
                    <div className="collapse navbar-collapse">
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="#" onClick={this.handleLogOut}>Logout</a></li>
                        </ul>
                    </div>}
                </div>
            </nav>
        )
    }
}

export default NavigationBar