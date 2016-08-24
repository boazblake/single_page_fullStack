import React from 'react';

import Navigation from './navigation.js'
import Home from './home.js'
import About from './about.js'
import Services from './services.js'
import Information from './information.js'
import Contact from './contact.js'
import Footer from './footer.js'

export default class App extends React.Component {
  constructor(props) {
      super(props);
  }

  render(){
    return (
      <div>
        <Navigation/>
        <Home/>
        <About/>
        <Services/>
        <Information/>
        <Contact/>
        <Footer/>
      </div>
      )
  }
}