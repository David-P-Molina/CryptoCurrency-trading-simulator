import React, { Component } from 'react'
import { connect } from 'react-redux'
import WalletInput from './WalletInput'
import { hasWallet } from '../../actions/wallet'

class Wallet extends Component {

    render() {
        return (
            <div>
                <h1>sdf</h1>
                <WalletInput username={this.props.username}/>
            </div>
        )
    }
}
const mapStateToProps = ({ auth: { currentUser } }) => {
    return {currentUser}
}
const mapDispatchToProps = (dispatch) => {
    return {
        dispatchHasWallet: (boolean) => dispatch(hasWallet(boolean))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Wallet)