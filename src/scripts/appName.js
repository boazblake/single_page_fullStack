import init from './init'
import Backbone from 'backbone'
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
// import { Provider} from 'react-redux';
// import store, {history} from './store'
import $ from 'jquery'

//Sentry
import Raven from 'raven-js';
import { sentry_url } from '../../config/sentry.js';

Raven.config(sentry_url).install();

//components
import App from './components/App.js'

//start the majik...
const app = function() {

  //SMOOTH SCROLLING EFFECT
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 900, 'swing');
        return false;
      }
    }
  })
})

//   //SMOOTH SCROLLING EFFECT from: https://paulund.co.uk/smooth-scroll-to-internal-links-with-jquery
// $(document).ready(function(){
//   $('a[href^="#"]').on('click',function (e) {
//       e.preventDefault();

//       var target = this.hash;
//       var $target = $(target);

//       $('html, body').stop().animate({
//           'scrollTop': $target.offset().top
//       }, 900, 'swing', function () {
//           window.location.hash = target;
//       });
//   });
// });


ReactDOM.render((
  <Router history={browserHistory}>
    <Route path='/' component={App}></Route>
  </Router>
  ),document.querySelector('#root'))
}


// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..
// NECESSARY FOR USER FUNCTIONALITY. DO NOT CHANGE. 
export const app_name = init()
app()
// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..