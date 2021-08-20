import React, { Component } from 'react'
import { connect } from 'react-redux'
//import { createWallet } from '../../actions/wallet

class WalletInput extends Component {
    state = {
        name: '',
        initial_value: 10000
    }
    handleOnChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }
    handleOnSubmit = (e) => {
        e.preventDefault()
        const { name, initial_value } = this.state
        this.props.dispatchCreateWallet({ name, initial_value })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    Create A New Wallet
                    <label>Wallet Nickname:</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={this.state.name}
                        onChange={this.handleOnChange}
                        />
                    <label>Starting Amount</label>
                    <input
                        type="number"
                        name="initial_value"
                        id="initial_value"
                        value={this.state.initial_value}
                        onChange={this.handleOnChange}
                        />
                    <input type="submit" />
                </form>
            </div>
        )
    }
}
const mapStateToProps = () => {
    return
}
const mapDispatchToProps = (dispatch) => {
    return
}
export default connect()(WalletInput)