import React, { Component } from 'react'

class WalletInput extends Component {
    state = {
        name: ''
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