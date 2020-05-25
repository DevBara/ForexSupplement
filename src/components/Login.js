import React, { Component } from 'react'
import { auth,provider } from "../firebase";


export default class Login extends Component {
  constructor(props){
    super(props);

    this.state={
      user: null
    }
    
    this.login=this.login.bind(this);
    this.logout=this.logout.bind(this);

}

login(){
  auth.signInWithPopup(provider)
    .then((result) => {
      const user=result.user;
      this.setState({
        user
      })
    })
}

logout(){

}


  render() {
    return (
      <div className="loginWrapper">
      {this.state.user ?
        <button onClick={this.logout}>Log Out</button>
        :
        <button onClick={this.login}>Log In</button>
      }
        
      </div>
    )
  }
}
