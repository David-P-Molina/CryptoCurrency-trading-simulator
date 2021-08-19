export const coinReducer = (state = [], action) => {
    switch(action.type) {
        case 'FETCH_INITIAL_COINS_INFO':
            return {
                ...state,
                coins: [...state.coins]
            }
        case 'ADD_COINS':
            return {
                ...state,
                coins: action.coins
            }
        default:
            return state
    }
}
