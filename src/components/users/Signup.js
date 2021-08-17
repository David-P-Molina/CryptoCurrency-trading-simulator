import React, { Component } from 'react'
import { connect } from 'react-redux'

class Signup extends Component {
    state = {
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    }

    handleOnChange = (e) => {
         this.setState({
             [e.target.name]: e.target.value
         })
    }
    handleOnSubmit = (e) => {
        e.preventDefault()
        const { username, email, password } = this.state
    }

    render() {
        return (
            <div>
                <form onChange={this.handleOnSubmit}>
                    <h1>Sign Up to Create Your Wallet</h1>
                <label htmlFor="username">Username:</label>
                <input 
                    type="text" 
                    name="username"
                    id="username"
                    value={this.state.username} 
                    onChange={this.handleOnChange} />
                <label htmlFor="email">Email:</label>
                <input 
                    type="text" 
                    name="email"
                    id="email"
                    value={this.state.email} 
                    onChange={this.handleOnChange} />
                <label htmlFor="password">Password:</label>
                <input 
                    type="password" 
                    name="password"
                    id="password"
                    value={this.state.password} 
                    onChange={this.handleOnChange} />
                <label htmlFor="confirm-password">Confirm Password:</label>
                <input 
                    type="password" 
                    name="confirm-password"
                    id="confirm-password"
                    value={this.state.confirmPassword} 
                    onChange={this.handleOnChange} />
                <input type="submit" value="signup" />
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = () => {
    
}

export default connect(null, mapDispatchToProps)(Signup)