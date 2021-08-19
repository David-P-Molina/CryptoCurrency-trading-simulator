import React from 'react'

const Coin = (props) => {
    let { coin } = props
    debugger
    return (
        <div>
            <h2>Name: {coin.name}</h2>
            <p><bold>{coin.symbol}</bold> {coin.initial_value} {coin.marketcap}</p>
        </div>
    )
}

export default Coin