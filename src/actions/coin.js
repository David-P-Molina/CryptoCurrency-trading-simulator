import { FETCH_INITIAL_COINS_INFO, ADD_COINS, UPDATE_COIN_VALUES } from "."

export function fetchCoins() {
    return (dispatch) => {
        dispatch({ type: FETCH_INITIAL_COINS_INFO })
        fetch('http://localhost:3001/coins')
        .then(res => {
            if (res.ok) {
                return res.json()
                .then(coins => dispatch({ type: ADD_COINS, coins}))
            } else {
                debugger
                return res.json()
                    .catch((errors) => {
                    console.log(errors)
                })
            }
        })
        
    }
}