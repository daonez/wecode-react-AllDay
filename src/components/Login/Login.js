import React from "react";

export class Login extends React.Component {
  render() {
    return (
      <div className="Login" style={{ backgroundColor: this.props.loginBackgroundColor }}>
        <div>Login</div>
        <button onClick={this.props.handleLogin}>ChangeLogin</button>
      </div>
    );
  }
}

export default Login;
