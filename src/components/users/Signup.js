import React, { Component } from 'react'

class Signup extends Component {
    state = {
        username: "",
        email: "",
        password: "",
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