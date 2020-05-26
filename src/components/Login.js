import React, { Component } from 'react'
import { auth,provider } from "../firebase";


export default class Login extends Component {
  constructor(props){
    super(props);

    this.state={
      user: null,
      username: '',
      currentItem: '',
      items: [],
    }
    this.login=this.login.bind(this);
    this.logout=this.logout.bind(this);
    this.handleChange = this.handleChange.bind(this);

}


handleChange(e){
  const item = {
    title: this.state.currentItem,
    user: this.state.user.displayName || this.state.user.email
  }
  this.setState({
    [e.target.name]: e.target.value
  });
}



login(){
  auth.signInWithPopup(provider)
    .then((result) => {
      const user=result.user;
      this.setState({
        user
      })
      window.location='http://localhost:3000/currencies'
    })
}


componentDidMount(){
  auth.onAuthStateChanged((user) => {
    if(user){
      this.setState({
        user
      });
    }
  });
}



logout(){
  auth.signOut()
    .then(() => {
      this.setState({
        user:null
      });
      
      
    });

}


  render() {
    return (
      <div className='app'>
        <header>
          <div className="wrapper">
            {this.state.user ?
              <button onClick={this.logout}>Logout</button>                
            :
              <button onClick={this.login}>Log In</button>              
            }
          </div>
        </header>
        
      </div>
           
    );
  }
}