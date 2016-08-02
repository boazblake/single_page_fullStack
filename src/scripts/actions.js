import {User} from './models/models'

const ACTIONS = {
 
  signUserUp: function(newUserData) {
    return User.register(newUserData).then(function(resp){
      console.log(resp, 'resp')
    })
  },

  logUserIn: function(newUserData) {
    return User.login(newUserData.email,newUserData.password).then(function(resp){
      console.log(resp)
    })
  },

  getCurrentUser: function(){
    return User.getCurrentUser()
  },

  updateCurrentUser: function(currentUserId, newUserInfo){
    User.updateCurrentUser(currentUserId, newUserInfo)
  },

  logUserOut: function(){
    return User.logout().then(function(resp){
      console.log(resp)
    })
  }
}

export default ACTIONS