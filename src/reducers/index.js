import { userReducer } from './userReducer'
import { walletReducer } from './walletReducer'
import { combineReducers } from 'redux'

export const rootReducer = combineReducers({
    user: userReducer,
    wallet: walletReducer
})
