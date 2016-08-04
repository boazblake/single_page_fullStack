import React from 'react';
import ACTIONS from '../../actions.js'
import CurrentUserInfo from './currentUserInfo.js'

export default class UserSettings extends React.Component {
  constructor(props){
    super(props);

    this._updateUserInfo=this._updateUserInfo.bind(this)
    this._handleUserData=this._handleUserData.bind(this)
  }

  _handleUserData(evt) {
    let stateName = evt.target.name
    let stateValue = evt.target.value

    this.setState({ [stateName]: stateValue });
  }

_updateUserInfo(evt){
  evt.preventDefault()

  let currentUserInfo = ACTIONS.getCurrentUser()
  let newUserInfo = this.state
  // only chnages between above objects should be sent
      
  let currentUserID = ACTIONS.getCurrentUser()._id
  ACTIONS.updateCurrentUser(currentUserID, newUserInfo)

}

  render(){
    return(
      <div className=" u-half-width row"  style={{position: "relative", left: "2%"}}>
        <form style={{float:"right", position: "relative",  right: "75%", textAlign: "left"}}>
        
          <div className=" u-full-width row"  style={{position: "relative", left: "2%"}}>
            <div className=" u-half-width row"  style={{position: "relative", left: "2%"}}>
              <label style={{color:"#2c3e50", paddingRight:"1%"}} htmlFor="nameInput" className="five columns">NAME</label>
              <input onBlur={this._handleUserData}
              style={{float:"right"}} 
              type="newUserName"  
              name="newUserName" 
              placeholder="full name" 
              id="nameInput"
              className="seven columns"/>
          </div>
          <div className=" u-half-width row"  style={{position: "relative", left: "2%"}}>            
            <label style={{color:"#2c3e50", paddingRight:"1%"}} htmlFor="emailInput" className="five columns">EMAIL</label>
            <input onBlur={this._handleUserData}
            style={{float:"right"}} 
            type="newUserEmail"  
            name="newUserEmail" 
            placeholder="test@mailbox.com" 
            id="emailInput"
            className="seven columns"/>
          </div>
          </div>

          <div className="u-full-width row" style={{position: "relative", left: "2%"}}>
            <div className=" u-half-width row"  style={{position: "relative", left: "2%"}}>
              <label htmlFor="passwordInput" style={{color:"#2c3e50", paddingRight:"1%"}} className="five columns">PASSWORD</label>
              <input onBlur={this._handleUserData} 
              style={{float:"right"}} 
              type="newUserPassword" 
              name="newUserPassword" 
              placeholder="New Password" 
              id="passwordInput"
              className="seven columns"/>
            </div>

            <div className=" u-half-width row"  style={{position: "relative", left: "2%"}}>
              <label htmlFor="cellphoneInput" style={{color:"#2c3e50", paddingRight:"1%"}} className="five columns">CELLPHONE</label>
              <input onBlur={this._handleUserData} 
              style={{float:"right"}} 
              type="newUserCellPhone" 
              name="newUserCellPhone" 
              placeholder="(123)456-7891" 
              id="cellphoneInput"
              className="seven columns"/>
            </div>
          </div>
          <button onClick={this._updateUserInfo}>Update Info</button>
        </form>
        <CurrentUserInfo/>
      </div>
    )
  }
}