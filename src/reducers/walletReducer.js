import { CREATE_WALLET, DELETE_WALLET, SELL_COIN, BUY_COIN, ERROR, ADD_TO_DATABASE } from "../actions"

const walletReducer = (state = {wallet: [], loading: false, error: ""}, action) => {
    switch(action.type) {
        case ADD_TO_DATABASE:
            return {...state, loading: action.payload}
        case ERROR:
            return {...state, error: action.payload}
        case CREATE_WALLET:
            return {...state, wallet: action.payload}
        default:
            return state
    }
}
export default walletReducer
