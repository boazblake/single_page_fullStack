import React from 'react';
import ACTIONS from '../../actions.js'

export default class CurrentUserInfo extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
   let currentUser = ACTIONS.getCurrentUser()
    return(
      <div className=" five colums"  style={{ paddingLeft:"75%"}}>

        <div className=" five colums"  >
          <label style={{color:"#2c3e50", paddingLeft:"1%"}} htmlFor="nameInput" className="five columns">CURRENT NAME</label>
          <label style={{float:"left"}}  className="seven columns">{currentUser.name}</label>
        </div>

        <div className=" five colums"  >            
          <label style={{color:"#2c3e50", paddingLeft:"1%"}} htmlFor="emailInput" className="five columns">CURRENT EMAIL</label>
          <label style={{float:"left"}}  className="seven columns">{currentUser.email}</label>
        </div>

        <div className=" five colums"  >
          <label htmlFor="cellphoneInput" style={{color:"#2c3e50", paddingLeft:"1%"}} className="five columns">CURRENT CELLPHONE</label>
          <label  style={{float:"left"}}  className="seven columns">{currentUser.cellphone}</label>
        </div>
      </div>
      )
  }
}
