import { FETCH_INITIAL_COINS_INFO, ADD_COINS } from "."

export function fetchCoins() {
    return (dispatch) => {
        dispatch({ type: FETCH_INITIAL_COINS_INFO })
        fetch('http://localhost:3001/coins')
        .then(res => res.json())
        .then(coins => {console.log("d"); dispatch({ type: ADD_COINS, coins})})
        //add catch
    }
}