import React, { Component } from 'react'
import MenuItems from './MenuItem'

class Navbar extends Component {
    render() {
        return (
            <nav className="NavbarItems">
                <h1 className="app-name">MemeCoin Simulator</h1>
                
                <ul>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
         )
    }
}

export default Navbar;