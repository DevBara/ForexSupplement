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
        {this.state.user ?
          <div>
            <div className='user-profile'>
              <img src={this.state.user.photoURL} className="loginPhoto" />
            </div>
            <div className='container'>
              <section className='add-item'>
                <form onSubmit={this.handleSubmit}>
                  <input type="text" name="username" placeholder="What's your name?" value={this.state.user.displayName || this.state.user.email} />
                  <input type="text" name="currentItem" placeholder="Input currency" onChange={this.handleChange} value={this.state.currentItem} />
                  <button>Add Item</button>
                </form>
              </section>
              </div>
          </div>
          :
          <div className='wrapper'>
            <p>You must be logged in to see tracked currencies.</p>
          </div>
        }
        <section className='display-item'>
    <div className="wrapper">
      <ul>
        {this.state.items.map((item) => {
          return (
            <li key={item.id}>
              <h3>{item.title}</h3>
              <p>brought by: {item.user}
                 {item.user === this.state.user.displayName || item.user === this.state.user.email ?
                   <button onClick={() => this.removeItem(item.id)}>Remove Currency</button> : null}
              </p>
            </li>
          )
        })}
      </ul>
    </div>
  </section>
      </div>
           
    );
  }
}