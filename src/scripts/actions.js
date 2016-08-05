import {User} from './models/models'

const ACTIONS = {
 
  signUserUp: function(newUserData) {
    return User.register(newUserData).then(function(resp){
      console.log(resp, 'resp')
    })
  },

  logUserIn: function(newUserData, self) {
    return User.login(newUserData.email,newUserData.password).then(function(resp){
      console.log(resp)
      self.setState({
        loggedIn:  (!!ACTIONS.getCurrentUser())
      })
    })
  },

  getCurrentUser: function(){
    return User.getCurrentUser()
  },

  updateCurrentUser: function(newUserInfo){
    let usr = new User(User.getCurrentUser())
    
    usr.set({
      name: newUserInfo.newUserName,
      email: newUserInfo.newUserEmail,
      password: newUserInfo.newUserPassword,
      cellphone: newUserInfo.newUserCellPhone
    })
    usr.save().then(function(resp){
      console.log(resp)
    })
  },

  logUserOut: function(self){
    return User.logout().then(function(resp){
      console.log(resp)
      self.setState({
        loggedIn:  (!!ACTIONS.getCurrentUser())
      })
    })
  }
}

export default ACTIONS