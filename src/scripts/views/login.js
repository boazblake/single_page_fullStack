import React from 'react';

export default class Login extends React.Component {
  render(){
    return(
        <form name="login-form" method="post" action="auth/login"> 
          <h2>Login</h2>
          <div className="row">
            <div className="six columns">
              <label for="exampleEmailInput">Your email</label>
              <input className="u-full-width" type="email" placeholder="test@mailbox.com" id="email" name="email"/>
            </div>
            <div className="six columns">
              <label for="exampleEmailInput">Your Password</label>
              <input className="u-full-width" type="password" id="password" name="password"/>
            </div>
          </div>
          <input className="button-primary" type="submit" value="Submit"/>
        </form>
    )
  }
}