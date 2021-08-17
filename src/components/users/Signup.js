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
                
            </div>
        )
    }
}
export default Signup