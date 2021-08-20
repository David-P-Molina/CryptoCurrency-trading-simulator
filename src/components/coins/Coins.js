import Coin from './Coin'

function Coins(props) {
        return (
            <div>
                <h1>Coins</h1>
                <h2>Symbol | Initial Value:  | MarketCap: | Day:  | Week:   </h2>
                {props.coins.map((coin) =>  <Coin {...coin.attributes} key={coin.id} />)}
            </div>
        )

}

export default Coins