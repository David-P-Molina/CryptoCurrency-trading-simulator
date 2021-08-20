import React from 'react'

const Coin = ({name, symbol, day, week,  initial_value, marketcap, volume_quantity, volume_price}) => {

    return (
        <div>
            <h4>{name}</h4>
            <p>{symbol} | Initial Value: {initial_value} | MarketCap: {marketcap}
             | Day: {day} | Week: {week} |  </p>
             <br />
        </div>
    )
}

export default Coin