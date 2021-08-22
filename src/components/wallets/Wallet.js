import React, { Component } from 'react'
import { connect } from 'react-redux'
import WalletInput from './WalletInput'

class Wallet extends Component {

    render() {
        return (
            <div>
                <h1>sdf</h1>
                <WalletInput hasWallet={true} username={this.props.username}/>
            </div>
        )
    }
}
const mapStateToProps = ({ auth: { currentUser } }) => {
    debugger
    return {currentUser}
}

export default connect(mapStateToProps)(Wallet)