import React, { Component } from 'react'
// import { connect } from 'react-redux'
import Coin from './Coin'

function Coins(props) {
        return (
            <div>
                <h1>Coins</h1>
                {props.coins.map((coin) =>  <Coin {...coin.attributes} key={coin.id} />)}
            </div>
        )

}

export default Coins