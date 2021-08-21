import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loginUser } from '../../actions/auth'

class Login extends Component {
    state = {
        email: "",
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
        const { email, password } = this.state
        this.props.dispatchLoginUser({ email, password })
        .then(() => this.props.history.push("/wallet"))
        .catch(() => this.setState({ error: true }))
    
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <h1>Login</h1>
                    <p className="errors"> {this.state.error && "Invalid email or password. Please try again."} </p>
                    <label htmlFor="email">Email:</label>
                    <input 
                        type="text"
                        name="email"
                        id="email"
                        onChange={this.handleOnChange}
                        value={this.state.username}
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
                    <input
                        type="submit"
                        value="Login"
                    />
                </form>
                <p>email: testing@gmail.com <br/> password: password</p>
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
