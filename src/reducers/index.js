import { combineReducers } from 'redux'
import authReducer from './authReducer'
import { walletReducer } from './walletReducer'
import { coinReducer } from './coinReducer'

export const rootReducer = combineReducers({
    auth: authReducer,
    wallet: walletReducer,
    coins:  coinReducer,
})
