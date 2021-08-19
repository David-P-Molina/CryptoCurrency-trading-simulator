import React from 'react'

const Coin = ({name, symbol, initial_value, marketcap}) => {

    return (
        <div>
            <h2>Name: {name}</h2>
            <p><bold>{symbol}</bold> {initial_value} {marketcap}</p>
        </div>
    )
}

export default Coin