import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router'
import ReactDOM from 'react-dom';
import jQuery from 'jquery'
import NavBar from '../modules/login/login.js'

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state= {
      loginShow:false
    }
  }

  componentDidMount(){
    console.log('mounting!!!')
  }

  unMount(){
    console.log("unmounting!")
    React.unmountComponentAtNode(document.getElementById('container'));
  }

  render(){
    return (
      <div className="container">
        <NavBar/>
          <a className="button" onClick={this.unMount} href="/auth/logout" method="get">logout</a>
          <a className="button" href="/updateUser" >update User</a>
          <a className="button" href="/businesscard" >business Cards</a>
      </div>
    )
  }
}