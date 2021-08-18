import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loginUser } from '../../actions/auth'

class Login extends Component {
    state = {
        username: "",
        password: "",
        error: false,
    }
    handleOnChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleOnSubmit = (e) => {
        e.preventDefault()
        const { username, password } = this.state
        this.props.dispatchLoginUser({ email, password })
        .dispatchLoginUser(() => this.props.history.push("/"))
        .catch(() => this.setState({ error: true }))
    
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <h1>Login</h1>
                    <p className="errors"> {this.state.error && "Invalid email or password. Please try again."} </p>
                    <label htmlFor="username">Username:</label>
                    <input 
                        type="text"
                        name="username"
                        id="username"
                        onChange={this.handleOnChange}
                        value={this.state.username}
                    />
                    <label htmlFor="password">Password:</label>
                    <input 
                        type="password"
                        name="password"
                        id="password"
                        onChange={this.handleOnChange}
                        value={this.state.password}
                    />
                    <input
                        type="submit"
                        value="Login"
                    />
                </form>
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        dispatchLoginUser: (credentials) => dispatch(loginUser(credentials))
    }
}

export default connect(null, mapDispatchToProps)(Login)
