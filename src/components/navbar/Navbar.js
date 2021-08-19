import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Logout from "../users/Logout"
import './Navbar.css'

const Navbar = ({ authChecked, loggedIn, currentUser }) => {
    return (
        <nav className="NavbarItems">
            <h1 className="app-name">MemeCoin Simulator</h1>
            <ul className="nav-menu">
                <NavLink to="/" className="nav-links" >Home</NavLink>            
                <NavLink to="/coins" className="nav-links" >Coin</NavLink>            
                <NavLink to="/wallet" className="nav-links" >Wallet</NavLink> 
                <NavLink to="/learn-more" className="nav-links" >Learn More</NavLink>       
                {loggedIn ? (
                    <>
                        {currentUser.username}
                        <Logout />
                    </>
                ) : (
                    <>
                        <NavLink to="/signup" className="nav-links" >Sign Up</NavLink>
                        <NavLink to="/login" className="nav-links" >Login</NavLink>
                    </>
                )}
                </ul>
        </nav>
     )
}
const mapStateToProps = ({ auth: { authChecked, loggedIn, currentUser } }) => {
    return { authChecked, loggedIn, currentUser }
}
export default connect(mapStateToProps)(Navbar)