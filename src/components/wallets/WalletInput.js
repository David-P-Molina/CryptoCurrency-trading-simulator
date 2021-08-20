import React, { Component } from 'react'
import { connect } from 'react-redux'
//import { createWallet } from '../../actions/wallet

class WalletInput extends Component {
    state = {
        name: '',
        amount: 10000
    }
    handleOnChange = (e) => {
        this.setState({
            [e.target.name]: event.target.value,
        })
    }
    handleOnSubmit = (e) => {
        e.preventDefault()
         //Finish add wallet information
        this.setState({
            name: ''
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    Create A New Wallet
                    <label>Wallet Nickname:</label>
                    <input
                        type="text"
                        value={this.state.name}
                        onChange={this.handleOnChange}
                        />
                    <label>Starting Amount</label>
                    <input
                        type="number"
                        amount={this.state.amount}
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