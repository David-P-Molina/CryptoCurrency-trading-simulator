import React, { Component } from 'react'
import { connect } from 'react-redux'
import WalletInput from './WalletInput'

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
const mapStateToProps = ({ auth: { currentUser: { username } } }) => {
    return {username}
}
export default connect(mapStateToProps)(Wallet)