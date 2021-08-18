import React from 'react'
import { connect } from 'react-redux'
import MenuItems from './MenuItem'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = ({ authChecked, LoggedIn, currentUser }) => {
    return (
        <nav className="NavbarItems">
            <h1 className="app-name">MemeCoin Simulator</h1>
            <ul className="nav-menu">
            {MenuItems.map((item, index) => {
                return (
                    <NavLink
                        to={item.url}
                        key={index}
                        className={item.cName}
                    >
                        {item.title}
                        </NavLink>
                    )
                })}
            </ul>
        </nav>
     )
}
const mapStateToProps = ({ auth: { authChecked, loggedIn, currentUser } }) => {
    return { authChecked, loggedIn, currentUser }
}
export default connect(mapStateToProps)(Navbar)