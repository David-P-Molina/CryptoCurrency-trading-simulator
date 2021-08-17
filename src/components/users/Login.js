import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Login extends Component {
    state = {
        username: "",
        password: "",
    }
    handleOnChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleOnSubmit = (e) => {
        e.preventDefault()

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
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
