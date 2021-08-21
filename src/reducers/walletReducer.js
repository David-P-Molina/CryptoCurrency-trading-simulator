const walletReducer = (state = {wallet: [], loading: false, error: ""}, action) => {
    switch(action.type) {
        case ADD_TO_DATABASE:
            return {...state, loading: action.payload}
        case ERROR:
            return {...state, error: action.payload}
        default:
            return state
    }
}
export default walletReducer
