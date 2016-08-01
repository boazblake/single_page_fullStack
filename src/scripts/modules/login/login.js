import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'
import ACTIONS from '../../actions.js'
import toastr from 'toastr'
import Buttons from './loginButtons.js'

export default class Login extends React.Component {
  constructor(props) {
    super(props)

    this.state={
      email:'',
      password:'',
      loggedIn:(ACTIONS.getCurrentUser())
    }

    this._handleLogin = this._handleLogin.bind(this)
    this._handleLogout = this._handleLogout.bind(this)    
    this._handleSignUp = this._handleSignUp.bind(this)    
    this._handleUserData = this._handleUserData.bind(this)
  }

  _handleUserData(evt) {
    let stateName = evt.target.name
    let stateValue = evt.target.value

    this.setState({ [stateName]: stateValue });
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
    
     this. _clearInputs()
  }

  _handleLogin(evt){
      evt.preventDefault()

      let newUserData= {
        email:this.state.email,
        password:this.state.password
      }

      console.log('newUserData', newUserData)
      ACTIONS.logUserIn(newUserData)

      toastr.success('Have fun storming the castle!', 'Miracle Max Says')
      
      this.setState({
        loggedIn:(ACTIONS.getCurrentUser())
      })

     this. _clearInputs()
  }

  _handleLogout(evt){
      evt.preventDefault()
      ACTIONS.getCurrentUser()
      ACTIONS.logUserOut()
      ACTIONS.getCurrentUser()
      
      this.setState({
        loggedIn:(ACTIONS.getCurrentUser())
      })
     
     this. _clearInputs()
  }

  _clearInputs(){
    let email = document.querySelector('#emailInput')
    let password = document.querySelector('#passwordInput')
    email.value = ''
    password.value = ''
    this.setState({
      email:'',
      password:''
    })
  }


  render(){
    return(
      <form >
          <div className="u-full-width row">
           
            <label style={{color:"white"}} htmlFor="exampleEmailInput" className="four columns">Your Email</label>
            
            <input onBlur={this._handleUserData}
              className="u-full-width" 
              style={{float:"right"}} 
              type="email"  
              name="email" 
              placeholder="test@mailbox.com" 
              id="emailInput"
              className="eight columns"/>
          </div>

          <div className="u-full-width">
            
            <label htmlFor="examplepwd" style={{color:"white"}} className="four columns">Password</label>

            <input onBlur={this._handleUserData} 
              style={{float:"right"}} 
              className="u-full-width row" 
              type="password" 
              name="password" 
              placeholder="password" 
              id="passwordInput"
              className="eight columns"/>
          
          </div>

       <Buttons _handleSignUp={this._handleSignUp} _handleLogin={this._handleLogin} _handleLogout={this._handleLogout} loggedIn={(this.state.loggedIn)}/ >

      </form>
    )
  }
}