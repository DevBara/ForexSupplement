import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import Currencies from './components/Currencies';
import WorldNews from './components/WorldNews'
import Home from './components/Home'

function App() {
  return (
    <div className="App">
    <header className="Header">
      <Router>
        <div>
          <nav className="navBar">
            <ul>
              <li>
                <Link className="link" to ="/home"> Home </Link>
              </li>
              <li>
                <Link className="link" to ="/currencies">Tracked Currencies</Link>
              </li>
              <li>
                <Link className="link" to ="/news">World News</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/currencies" component={Currencies} />
            <Route path="/news" component={WorldNews} />
          </Switch>
        </div>
      </Router>
    </header>
   </div>
  )
  
}


export default App;