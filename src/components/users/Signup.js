import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signupUser } from '../../actions/auth'

class Signup extends Component {
    state = {
        username: "",
        email: "",
        password: "",
        errors: {status: {message: ""}}
    }

    handleOnChange = (e) => {
         this.setState({
             [e.target.name]: e.target.value
         })
    }
    handleOnSubmit = (e) => {
        e.preventDefault()
        const { username, email, password } = this.state
        this.props
            .dispatchSignupUser({ username, email, password })
            .then(() => this.props.history.push("/"))
            .catch((errors) => this.setState({ errors }))
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <h1>Sign Up to Create Your Wallet</h1>
                    <br />
                    <p className='h-8 text-red-400'>{this.state.errors.status.message}</p>
                <label htmlFor="username">Username:</label>
                <input 
                    type="text" 
                    name="username"
                    id="username"
                    onChange={this.handleOnChange} 
                    value={this.state.username} 
                />
                <br />
                <label htmlFor="email">Email:</label>
                <input 
                    type="text" 
                    name="email"
                    id="email"
                    onChange={this.handleOnChange} 
                    value={this.state.email} 
                />
                <br />
                <label htmlFor="password">Password:</label>
                <input 
                    type="password" 
                    name="password"
                    id="password"
                    onChange={this.handleOnChange} 
                    value={this.state.password} 
                />
                <br />
                <input type="submit" value="signup" />
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchSignupUser: (credentials) => dispatch(signupUser(credentials))
    }
}

export default connect(null, mapDispatchToProps)(Signup)