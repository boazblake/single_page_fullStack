import React from 'react';
import ACTIONS from '../../actions.js'

export default class CurrentUserInfo extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    if (ACTIONS.getCurrentUser()) {
      let currentUser = ACTIONS.getCurrentUser()
     return(
       <div className="u-half-width row "  style={{float:"left", position: "relative",  left: "75%", textAlign: "right"}}>
 
         <div className=" five colums"  >
           <label style={{color:"#2c3e50", paddingRight:"1%", float:"left"}} htmlFor="nameInput" className="five columns">CURRENT NAME:  </label>
           <label style={{float:"right"}}  className="seven columns">{currentUser.name}</label>
         </div>
 
         <div className=" five colums"  >            
           <label style={{color:"#2c3e50", paddingRight:"1%", float:"left"}} htmlFor="emailInput" className="five columns">CURRENT EMAIL:  </label>
           <label style={{float:"right"}}  className="seven columns">{currentUser.email}</label>
         </div>
 
         <div className=" five colums"  >
           <label htmlFor="cellphoneInput" style={{color:"#2c3e50", paddingRight:"1%", float:"left"}} className="five columns">CURRENT CELLPHONE:  </label>
           <label  style={{float:"right"}}  className="seven columns">{currentUser.cellphone}</label>
         </div>
       </div>
       )} else return(
       <div><h1 className="warning error">NO USER LOADED</h1></div>
       )
  }
}
