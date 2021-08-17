import React, { Component } from 'react'

class Signup extends Component {
    state = {
        username: "",
        email: "",
        password: "",
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
                <label>Username:</label>
                <input 
                    type="" 
                    value={this.state.} 
                    onChange={this.handleOnChange} />
                <label>Email:</label>
                <input 
                    type="" 
                    value={this.state.} 
                    onChange={this.handleOnChange} />
                <label>Password:</label>
                <input 
                    type="" 
                    value={this.state.} 
                    onChange={this.handleOnChange} />
                <label>Confirm Password:</label>
                <input 
                    type="" 
                    value={this.state.} 
                    onChange={this.handleOnChange} />
                <input type="submit" value="signup" />
                </form>
            </div>
        )
    }
}
export default Signup