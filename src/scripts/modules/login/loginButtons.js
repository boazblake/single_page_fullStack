import React from 'react'

export default class Buttons extends React.Component {
  constructor(props) {
    super(props)
  }

  render(){
    if (this.props.loggedIn) {
      return(
        <div className="row u-full-width">
          <button  onClick={this.props._handleLogin} 
          className="btn btn-primary" 
          type="submitLogOn"   
          name="logon" 
          style={{color:"white"}}>LOG   ON</button>

          <button  onClick={this.props._handleLogout} 
          className="btn btn-primary" 
          type="submitLogOut" 
          name="logout"  
          style={{color:"white"}}>LOG OUT</button>

          <button  onClick={this.props._handleSignUp} 
          className="btn btn-primary" 
          type="submitSignUp" 
          name="signup"  
          style={{color:"white"}}>SIGN UP</button>
        </div>
      )
    } else {
      return(
        <div>
          <button  onClick={this.props._handleLogin} 
          className="btn btn-primary" 
          type="submitLogOn"   
          name="logon" 
          style={{color:"white"}}>LOG   ON</button>

          <button  onClick={this.props._handleSignUp} 
          className="btn btn-primary" 
          type="submitSignUp" 
          name="signup"  
          style={{color:"white"}}>SIGN UP</button>
        </div>
      )
    }
    
  }
}