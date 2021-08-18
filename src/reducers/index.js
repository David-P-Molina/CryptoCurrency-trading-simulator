import { userReducer } from './userReducer'
import { walletReducer } from './walletReducer'
import { combineReducers } from 'redux'

export const rootReducer = combineReducers({
    auth: (state, action) => 'testing',
    user: userReducer,
    wallet: walletReducer,
})
