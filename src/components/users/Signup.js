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
                <label>Username:</label>
                <label>Email:</label>
                <label>Password:</label>
                <label>Confirm Password:</label>
                </form>
            </div>
        )
    }
}
export default Signup