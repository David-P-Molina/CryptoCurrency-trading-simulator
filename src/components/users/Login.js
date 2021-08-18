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
                    <label htmlFor="username">Username:</label>
                    <input 
                        type="text"
                        name="username"
                        id="username"
                        value={this.state.username}
                        onChange={this.handleOnChange}
                    />
                    <label htmlFor="password">Password:</label>
                    <input 
                        type="password"
                        name="password"
                        id="password"
                        value={this.state.password}
                        onChange={this.handleOnChange}
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


const mapDispatchToProps = () => {
    
}

export default connect(null, mapDispatchToProps)(Login)
