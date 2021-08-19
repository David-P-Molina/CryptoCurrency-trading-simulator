import React from 'react'
import { connect } from 'react-redux'
import Navbar from './components/navbar/Navbar'
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import LearnMore from './components/LearnMore'
import Coins from './components/coins/Coins'
import Wallet from './components/wallets/Wallet'
import Signup from './components/users/Signup'
import Login from './components/users/Login'
import Logout from './components/users/Logout'
import withAuth from './components/auth/withAuth'
import { fetchCoins } from './actions/coin'

class App extends React.Component {
  constructor(props) { //is this needed?
    super(props)
    this.state = {
      error: null,
      coins: []
    }
  }
  
  componentDidMount() {
      this.props.fetchCoins()
    }
  render() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="page-contents">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/coins">
              <Coins coins={this.props.coins.coins} />
          </Route> 
          <Route path="/wallet" component={withAuth(Wallet)} />
          <Route path="/learn-more" component={LearnMore} />
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />
          <Route path="/signup" component={Signup} />
        </Switch>
        </div>
      </Router>
    </div>
  )};
}

const mapStateToProps = (state) => {
  return {coins: state.coins}
}

const mapDispatchToProps = (dispatch) => {
  return {fetchCoins: () => dispatch(fetchCoins())}
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
