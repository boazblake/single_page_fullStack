import React from 'react'


export default  class Navigation extends React.Component {
  constructor(props){
    super(props)
    this.state = {
    loginShow:false
    }

    this._showHideLogin = this._showHideLogin.bind(this)
  }
  _showHideLogin(e) {
    e.preventDefault()
    if (!this.state.loginShow) return this.setState({ loginShow:true })
   else  if (this.state.loginShow) return this.setState({ loginShow:false })
  }

  render() {
    let showHide = (this.state.loginShow) ? "row one-half column " : "row one-half column opacityOFF";

    return (
      <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse-main">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#home"><img id="navbar-logo" src="images/joshLogo.svg"/></a>
          </div>

          <div className="collapse navbar-collapse" id="navbar-collapse-main">
            <ul className="nav navbar-nav navbar-right">
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#information">Information</a></li>
              <li><a href="#google_map">Contact</a></li>
              <li><a id="login" onClick={this._showHideLogin}>Login</a></li>
              <li className={showHide} style={{float:"left", marginLeft:"2%", top:"100%", right:0, position:"absolute", backgroundColor: "#2c3e50", width:"100%"}}>
                <div  style={{float:"right"}} className="dropdown-content one-half column" id="myDropdown">
                    <label style={{color:"white"}} >Login</label>
                    <input style={{float:"right"}} type="email" placeholder="email@domain.com"/><br/>
                    <label style={{color:"white"}} >password</label>
                    <input  style={{float:"right"}}className="one-half column" type="password" placeholder="password"/>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}