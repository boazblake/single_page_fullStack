import React from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import ACTIONS from '../actions'


export default  class Navigation extends React.Component {
  constructor(props){
    super(props)
    this.state = {
    loginShow:false
    }

    this._showHideLogin = this._showHideLogin.bind(this)
    this._goToRegisterPage = this._goToRegisterPage.bind(this)
    this._handleLogin = this._handleLogin.bind(this)
  }

  _showHideLogin(e) {
    e.preventDefault()
    if (!this.state.loginShow) return this.setState({ loginShow:true })
   else  if (this.state.loginShow) return this.setState({ loginShow:false })
  }

_goToRegisterPage(e){
    e.preventDefault()

}

_handleLogin(evt){
    evt.preventDefault()
    console.log('evt.target.email.value', evt.target.email.value)
    console.log('evt.target.password.value', evt.target.password.value)
    ACTIONS.logUserIn(evt.target.email.value,
                                        evt.target.password.value)
}

  render() {
    let showHide = (this.state.loginShow) ? "row one-half column " : "row one-half column opacityOFF";

    return (
      <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse-main">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#home"><img id="navbar-logo" src="images/joshLogo.svg"/></a>
          </div>

          <div className="collapse navbar-collapse" id="navbar-collapse-main">
            <ul className="nav navbar-nav navbar-right">
              <li><Link to="#about">About</Link></li>
              <li><Link to="#services">Services</Link></li>
              <li><Link to="#information">Information</Link></li>
              <li><Link to="#google_map">Contact</Link></li>
              <li><a id="login" onClick={this._showHideLogin}>Login</a></li>
              <li className={showHide} style={{float:"left", top:"100%", right:0, left:0, position:"absolute", backgroundColor: "#2c3e50", width:"100%"}}>
                <div  style={{float:"right"}} className="dropdown-content one-half column" id="myDropdown">
                    <form onSubmit={this._handleLogin}>
                        <div className="u-full-width">
                          <label style={{color:"white"}} htmlFor="exampleEmailInput">Your Email</label>
                          <input className="u-full-width" style={{float:"right"}} type="email" name="email" placeholder="test@mailbox.com" id="exampleEmailInput"/>
                        </div>

                        <div className="u-full-width">
                          <label htmlFor="examplepwd" style={{color:"white"}}>Password</label>
                          <input style={{float:"right"}} className="u-full-width" type="password" name="password" placeholder="password" id="examplepwd"/>
                        </div>
                        
                      <button className="btn btn-primary" value="Submit" type="submit" style={{color:"white"}}>LOG   ON</button>
                      <button className="btn btn-primary" style={{color:"white"}}><Link  to="/register" >SIGN   UP</Link></button>
                    </form>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}