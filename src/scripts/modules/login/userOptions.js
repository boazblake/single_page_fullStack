import React from 'react'
import UserSettings from '../userSettings/inputs.js'
import ACTIONS from '../../actions.js'

export default class Buttons extends React.Component {
  constructor(props) {
    super(props)
    this.state ={
      userSettingsShow:false
    }

    this._showHideUserSettings = this._showHideUserSettings.bind(this)
  }

  _showHideUserSettings(evt){
    evt.preventDefault()
      if (!this.state.userSettingsShow) return this.setState({ userSettingsShow:true })
     else  if (this.state.userSettingsShow) return this.setState({ userSettingsShow:false })
  }
  


  render(){
    let showHide = (this.state.userSettingsShow) ? "container-fluid  opacityON" : "container-fluid  opacityOFF";

    if (this.props._loggedIn) {
      return(
        <div className="container"style={{padding:"0, 10%"}} >
            <button  onClick={this.props._handleLogout} 
            className="btn btn-primary" 
            type="submitLogOut" 
            name="logout"  
            style={{color:"white"}}>LOG OUT</button>

            <button  onClick={this.props._loadImageLibrary} 
            className="btn btn-primary" 
            style={{color:"white"}}>Image Library</button>

            <button  onClick={this.props._loadBusinessCards} 
            className="btn btn-primary" 
            style={{color:"white"}}>Business Cards</button>

            <button  onClick={this._showHideUserSettings} 
            className="btn btn-primary" 
            style={{color:"white"}}>User Settings</button>

            <div className={showHide} style={{float:"right", top:"100%", margin:"auto", position:"absolute", backgroundColor: "#7f8c8d", width:"80%"}}>
              <div  className="dropdown-content container-fluid" id="myDropdown">
                  <UserSettings />
              </div>
            </div>
        </div>
      )
    } else {
      return(
        <div>
        <form style={{float:"right", position: "relative",  left: "-10%", textAlign: "left"}}>
        
          <div className=" row"  style={{position: "relative", left: "50%"}}>
            <label style={{color:"white", paddingRight:"1%"}} htmlFor="exampleEmailInput" className="four columns">Your Email</label>

            <input onBlur={this.props._handleUserData}
            className="u-full-width" 
            style={{float:"right"}} 
            type="email"  
            name="email" 
            placeholder="test@mailbox.com" 
            id="emailInput"
            className="eight columns"/>
          </div>

          <div className=" row" style={{position: "relative", left: "50%"}}>
            <label htmlFor="examplepwd" style={{color:"white", paddingRight:"1%"}} className="four columns">Password</label>
            <input onBlur={this.props._handleUserData} 
            style={{float:"right"}} 
            className="u-full-width" 
            type="password" 
            name="password" 
            placeholder="password" 
            id="passwordInput"
            className="eight columns"/>
          </div>
        </form>

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