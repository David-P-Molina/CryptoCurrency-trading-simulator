import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createWallet } from '../../actions/wallet'

class WalletInput extends Component {
    state = {
        name: '',
        initial_value: 10000
    }
    handleOnChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleOnSubmit = (e) => {
        debugger
        e.preventDefault()
        const { name, initial_value } = this.state
        this.props.dispatchCreateWallet({ name, initial_value })
    }

    render() {
        return (
            <div>
                <h1>Welcome {this.props.currentUser.username}</h1>
                <form onSubmit={this.handleOnSubmit}>
                    Create A New Wallet
                    <label>Wallet Nickname:</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        onChange={this.handleOnChange}
                        value={this.state.name}
                        />
                    <label>Starting Amount</label>
                    <input
                        type="number"
                        name="initial_value"
                        id="initial_value"
                        onChange={this.handleOnChange}
                        value={this.state.initial_value}
                        />
                    <input type="submit" />
                </form>
            </div>
        )
    }
}
const mapStateToProps = ({ auth: { currentUser: { username } } }) => {
    return {username}
}
const mapDispatchToProps = (dispatch) => {
    return {
        dispatchCreateWallet: (walletInfo) => dispatch(createWallet(walletInfo))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(WalletInput)