import React, { Component } from 'react';
import SignUp from './SignUp';

class SignUpContainer extends Component {
  constructor() {
    super();
    this.state = {
      fullname: '',
      email: '',
      password: ''
    }
  }

  handleFullName(fullname) {
    this.setState({ fullname });
  }

  handleEmail(email) {
    this.setState({ email })
  }

  handlePassword(password) {
    this.setState({ password })
  }

  render() {
    return (
      <SignUp
        handleEmail={this.handleEmail.bind(this)}
        handleFullName={this.handleFullName.bind(this)}
        handlePassword={this.handlePassword.bind(this)}
        email={this.state.email}
        name={this.state.fullname}
        password={this.state.password}
      />
    )
  }
}

export default SignUpContainer;