import React from 'react'
import Navbar from './components/navbar/Navbar'
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/home'
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route path="/">
          <Home />
        </Route>
      </Router>
    </div>
  );
}

export default App;
