const walletReducer = (state = [], action) => {
    switch(action.type) {
        case '':
            return []
        default:
            return state
    }
}
export default walletReducer
