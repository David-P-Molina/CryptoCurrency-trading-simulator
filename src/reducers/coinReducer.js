export const coinReducer = (state = [], action) => {
    switch(action.type) {
        case 'FETCH_INITIAL_COINS_INFO':
            return []
        case 'ADD_COINS':
            return []
        default:
            return state
    }
}
