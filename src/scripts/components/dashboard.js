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
        <Button>NEW BUSINESS CARD</Button>
        <BusinessCardList />
      </div>
    )
  }
}