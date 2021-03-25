import { combineReducers } from 'redux'

import listingsReducer from './listings'
import bookingsReducer from './bookings'

const rootReducer = combineReducers({
    listings: listingsReducer,
    bookings: bookingsReducer,
})

export default rootReducer
