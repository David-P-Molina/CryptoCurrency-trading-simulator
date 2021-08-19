import React, { Component } from 'react'
// import { connect } from 'react-redux'
import Coin from './Coin'

function Coins(props) {
        return (
            <div>
                <h1>Coins</h1>
                {props.map((coin) =>  <Coin coin={coin} key={coin.id} name={coin.name} />)}
            </div>
        )

}

export default Coins