import React from "react"
import axios from "axios"
import classnames from "classnames"

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: {emai: null, first_name: null, last_name: null, password: null}
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.authenticate(this.state.email, this.state.password)
    
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Login</h1>

        <div className="form-group">
          <label className="control-label">Email</label>
          <input
            value={this.state.email}
            onChange={this.onChange}
            type="text"
            name="email"
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label className="control-label">Password</label>
          <input
            onChange={this.onChange}
            value={this.state.password}
            type="password"
            name="password"
            className="form-control"
          />
        </div>

        <div className="form-group">
          <button className="btn btn-primary btn-lg">
            Sign In
          </button>
        </div>
      </form>
    );
  }
}


export default Login

// "Unable to log in with provided credentials."