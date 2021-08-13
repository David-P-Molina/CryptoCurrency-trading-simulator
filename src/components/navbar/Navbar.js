import React, { Component } from 'react'
import MenuItems from './MenuItem'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

class Navbar extends Component {
    render() {
        return (
            <nav className="NavbarItems">
                <h1 className="app-name">MemeCoin Simulator</h1>
                <ul className="nav-menu">
                    {MenuItems.map((item, index) => {
                        return (
                            <NavLink
                                to={item.url}
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
}

export default Navbar;