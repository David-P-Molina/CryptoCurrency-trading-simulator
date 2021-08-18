import React from 'react'
import Navbar from './components/navbar/Navbar'
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import LearnMore from './components/LearnMore'
// import Coins from './components/coin/Coins'
import Wallet from './components/wallets/Wallet'
import Signup from './components/users/Signup'
import Login from './components/users/Login'
// import Logout from './components/users/Logout'
import withAuth from './components/auth/withAuth'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
      isLoggedIn: false,
      coins: []
    }
  }

    componentDidMount() {
      
    }
  render() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          {/* <Route path="/coins">
            <Coin />
            </Route> */}
          <Route path="/my-wallet" component={withAuth(Wallet)} />
          <Route path="/learn-more">
            <LearnMore />
          </Route>
          <Route path="/login">
            <Login />
            </Route>
            {/* <Route path="/logout">
              <Logout />
            </Route> */}
            <Route path="/signup">
            <Signup />
          </Route>
        </Switch>
      </Router>
    </div>
  )};
}

export default App;
