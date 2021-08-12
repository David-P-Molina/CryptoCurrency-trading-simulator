import React, { Component } from 'react'

class WalletInput extends Component {
    state = {
        name: ''
    }

    render() {
        return (
            <div>
                <form>
                    Create A New Wallet
                    <label>Wallet Nickname:</label>
                    <input
                        type="text"
                        value={this.state.text}
                        />
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default WalletInput