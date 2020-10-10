import React from "react"
import axios from "axios"
import classnames from "classnames"
import {browserHistory} from "react-router"

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      first_name: '',
      last_name: '',
      password: ''
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.createAccount(
      this.state.email,
      this.state.first_name,
      this.state.last_name, 
      this.state.password,
      '/'
    )
  }
  componentWillUnmount(){
    this.props.removeSignUpErrors()
  }
  render() {
    return (
      <form onSubmit={this.onSubmit}>

        <div className={classnames("form-group", {"has-error": this.props.signUp.errors.first_name})}>
          <label className="control-label">First Name</label>
          <input
            value={this.state.first_name}
            onChange={this.onChange}
            type="text"
            name="first_name"
            className="form-control"
          />
        </div>
        {this.props.signUp.errors.first_name &&
        this.props.signUp.errors.first_name.map(error => <span  className="help-block">{error}</span>)}

        <div className={classnames("form-group", {"has-error": this.props.signUp.errors.last_name})}>
          <label className="control-label">Last Name</label>
          <input
            value={this.state.last_name}
            onChange={this.onChange}
            type="text"
            name="last_name"
            className="form-control"
          />
        </div>
        {this.props.signUp.errors.last_name &&
        this.props.signUp.errors.last_name.map(error => <span  className="help-block">{error}</span>)}

        <div className={classnames("form-group", {"has-error": this.props.signUp.errors.email})}>
          <label className="control-label">Email</label>
          <input
            value={this.state.email}
            onChange={this.onChange}
            type="text"
            name="email"
            className="form-control"
          />
        </div>
        {this.props.signUp.errors.email &&
        this.props.signUp.errors.email.map(error => <span  className="help-block">{error}</span>)}
        

        <div className={classnames("form-group", {"has-error": this.props.signUp.errors.password})}>
          <label className="control-label">Password</label>
          <input
            onChange={this.onChange}
            value={this.state.password}
            type="password"
            name="password"
            className="form-control"
          />
        </div>
        {this.props.signUp.errors.password &&
        this.props.signUp.errors.password.map(error => <span  className="help-block">{error}</span>)}

        <div className="form-group">
          <button className="btn btn-primary btn-lg">
            Sign up
          </button>
        </div>
      </form>
    );
  }
}


export default SignUp