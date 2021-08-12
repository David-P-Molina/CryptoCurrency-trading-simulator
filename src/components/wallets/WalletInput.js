import React, { Component } from 'react'

class WalletInput extends Component {
    state = {
        name: '',
        value: 10000
    }

    handleOnSubmit = event => {
        event.preventDefault()
        this.props.(this.state.name) //Finish add wallet information
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
                        value={this.state.value}
                        onChange={this.handleOnChange}
                        />
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default WalletInput