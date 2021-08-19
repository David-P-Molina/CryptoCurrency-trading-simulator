export function fetchCoins() {
    return (dispatch) => {
        dispatch({ type: FETCH_INITIAL_COINS_INFO})
    }
}