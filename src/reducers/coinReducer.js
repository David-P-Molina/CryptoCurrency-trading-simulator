 const coinReducer = (state = {coins: [], loading: false}, action) => {
    switch(action.type) {
        case 'FETCH_INITIAL_COINS_INFO':
            return {
                ...state,
                loading: true,
            }
        case 'ADD_COINS':
            return {
                ...state,
                coins: action.coins.data,
                loading: false,
            }
        default:
            return state
    }
}
export default coinReducer