import React, { Component } from 'react'
import firebase,{auth, provider} from './firebase.js'

export default class Login extends Component {
  constructor(props){
    super(props);

    this.state={
      user: null
    }
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
