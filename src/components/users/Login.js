import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Login extends Component {
    state = {
        username: "",
        password: "",
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
