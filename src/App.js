import React from 'react'
import Navbar from './components/navbar/Navbar'
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import LearnMore from './components/LearnMore'
import Coins from './components/coin/Coins'
import Wallet from './components/wallets/Wallet'
import Signup from './components/users/Signup'
import Login from './components/users/Login'
import Logout from './components/users/Logout'
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
        <div className="page-contents">
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route path="/coins" component={Coins} />*/}
          <Route path="/wallet" component={withAuth(Wallet)} />
          <Route path="/learn-more" component={LearnMore} />
          <Route path="/login" component={Login} />
            {/* <Route path="/logout" component={Logout} /> */}
            <Route path="/signup" component={Signup} />
        </Switch>
        </div>
      </Router>
    </div>
  )};
}

export default App;
