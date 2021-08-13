import { userReducer } from './userReducer'
import { walletReducer } from './walletReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    user: userReducer,
    wallet: walletReducer
})
export rootReducer