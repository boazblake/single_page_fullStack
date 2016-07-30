import {User} from './models/models'

const ACTIONS = {
  logUserIn: function(email,password) {
    return User.login(email,password).then(function(resp){
      console.log(resp)
      location.hash = "home"
    })
  }
}


export default ACTIONS