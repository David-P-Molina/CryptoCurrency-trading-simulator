import React from 'react'
import { connect } from 'react-redux'
// import MenuItems from './MenuItem'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = ({ authChecked, LoggedIn, currentUser }) => {
    return (
        <nav className="NavbarItems">
            <h1 className="app-name">MemeCoin Simulator</h1>
            <ul className="nav-menu">
                <NavLink to="/" className="nav-links" >Home</NavLink>            
                <NavLink to="/coins" className="nav-links" >Coin</NavLink>            
                <NavLink to="/wallet" className="nav-links" >Wallet</NavLink>        
                <NavLink to="/signup" className="nav-links" >Sign Up</NavLink>
                <NavLink to="/login" className="nav-links" >Login</NavLink>
                <NavLink to="/logout" className="nav-links" >Logout</NavLink>
            </ul>
        </nav>
     )
}
const mapStateToProps = ({ auth: { authChecked, loggedIn, currentUser } }) => {
    return { authChecked, loggedIn, currentUser }
}
export default connect(mapStateToProps)(Navbar)