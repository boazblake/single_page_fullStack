import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'
import ACTIONS from '../../actions.js'
import toastr from 'toastr'
import Buttons from './userButtons.js'

export default class Login extends React.Component {
  constructor(props) {
    super(props)
   

    console.log("called on refresh?", (!!ACTIONS.getCurrentUser()) )

    this.state={
      email:'',
      password:'',
      loggedIn: (!!ACTIONS.getCurrentUser())
    }

    this._handleLogin = this._handleLogin.bind(this)
    this._handleLogout = this._handleLogout.bind(this)    
    this._handleSignUp = this._handleSignUp.bind(this)    
    this._handleUserData = this._handleUserData.bind(this)
    this._loadImageLibrary =this._loadImageLibrary.bind(this)
    this._loadBusinessCards =this._loadBusinessCards.bind(this)
  }


  _loadImageLibrary(evt){
    evt.preventDefault()
    console.log('fin building image library')
  }

    _loadBusinessCards(evt){
    evt.preventDefault()
    console.log('fin building business page')
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

    ACTIONS.signUserUp(newUserData)

    ACTIONS.logUserIn(newUserData)

    
     this. _clearInputs()
     this.setState({
      loggedIn:  (!!ACTIONS.getCurrentUser())
     })
  }

  _handleLogin(evt){
      evt.preventDefault()

      let newUserData= {
        email:this.state.email,
        password:this.state.password
      }

      ACTIONS.logUserIn(newUserData)
      this.setState({
        loggedIn:  (!!ACTIONS.getCurrentUser())
      })

     this. _clearInputs()
  }

  _handleLogout(evt){
      evt.preventDefault()
      ACTIONS.logUserOut()
        this.setState({
          loggedIn:  (!!ACTIONS.getCurrentUser())
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
      <div className="container-fluid">
        <Buttons  _handleSignUp={this._handleSignUp} 
          _handleLogin={this._handleLogin} 
          _handleLogout={this._handleLogout}
          _handleSetupUser={this._handleSetupUser}
          _loggedIn={(this.state.loggedIn)}
          _loadImageLibrary={this._loadImageLibrary}
          _loadBusinessCards={this._loadBusinessCards}
          _handleUserData={this._handleUserData} / >
      </div>      

    )
  }
}