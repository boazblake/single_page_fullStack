import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'
import ACTIONS from '../actions'
import toastr from 'toastr'

export default class Login extends React.Component {
  constructor(props) {
    super(props)
    
    this.state={
      email:'',
      password:''
    }

    this._handleLogin = this._handleLogin.bind(this)
    this._handleLogout = this._handleLogout.bind(this)    
    this._handleSignUp = this._handleSignUp.bind(this)    
    this._handleOnSubmit = this._handleOnSubmit.bind(this)
    this._handleUserData = this._handleUserData.bind(this)
  }

  _handleUserData(evt) {
    let stateName = evt.target.name
    let stateValue = evt.target.value

    this.setState({ [stateName]: stateValue });
  }

  _handleOnSubmit(evt){
    evt.preventDefault()
    evt.persist()
  }

  _handleSignUp(evt){
    evt.preventDefault()

    let newUserData= {
      email:this.state.email,
      password:this.state.password
    }

    console.log('newUserData', newUserData)
    ACTIONS.signUserUp(newUserData)
    ACTIONS.logUserIn(newUserData)
  }

  _handleLogin(evt){
      evt.preventDefault()

      let newUserData= {
        email:this.state.email,
        password:this.state.password
      }

      console.log('newUserData', newUserData)
      ACTIONS.logUserIn(newUserData)

      console.log(ReactDOM.findDOMNode(this.refs.email.innerText))
      console.log(ReactDOM.findDOMNode(this.refs.password.innerText))


      toastr.success('Have fun storming the castle!', 'Miracle Max Says')
  }

  _handleLogout(evt){
      evt.preventDefault()
      ACTIONS.getCurrentUser()
      ACTIONS.logUserOut()
      ACTIONS.getCurrentUser()
  }

  render(){
    return(
      <form onSubmit={this._handleOnSubmit}>
          <div className="u-full-width">
            <label style={{color:"white"}} htmlFor="exampleEmailInput">Your Email</label>
            <input onBlur={this._handleUserData} className="u-full-width" style={{float:"right"}} type="email" ref="email" name="email" placeholder="test@mailbox.com" id="exampleEmailInput"/>
          </div>

          <div className="u-full-width">
            <label htmlFor="examplepwd" style={{color:"white"}}>Password</label>
            <input onBlur={this._handleUserData} style={{float:"right"}} className="u-full-width" type="password" ref="password"name="password" placeholder="password" id="examplepwd"/>
          </div>

        <button  onClick={this._handleLogin} className="btn btn-primary" type="submitLogOn" ref="logon"  name="logon" style={{color:"white"}}>LOG   ON</button>
        <button  onClick={this._handleLogout} className="btn btn-primary" type="submitLogOut" ref="logout" name="logout"  style={{color:"white"}}>LOG OUT</button>
        <button  onClick={this._handleSignUp} className="btn btn-primary" type="submitSignUp" ref="signup" name="signup"  style={{color:"white"}}>SIGN UP</button>
      </form>
    )
  }
}