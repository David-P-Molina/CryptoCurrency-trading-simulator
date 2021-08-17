import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Login extends Component {
    state = {
        username: "",
        password: "",
    }
    handleOnChange = (e) => {
        this.setState({
            [this.target.name]: this.target.value
        })
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
