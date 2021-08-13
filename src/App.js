import React from 'react'
import Navbar from './components/navbar/Navbar'
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import LearnMore from './components/LearnMore'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route path="/">
          <Home />
        </Route>
        {/* <Route path="/coins">
          <CoinContainer />
        </Route>
        <Route path="/my-wallet">
          <WalletContainer />
        </Route> */}
        <Route path="/learn-more">
          <LearnMore />
        </Route>
        {/* <Route path="/login">
          <Login />
        </Route>
        <Route path="/logout">
          <Logout />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route> */}
      </Router>
    </div>
  );
}

export default App;
