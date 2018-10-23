import { combineReducers } from 'redux'
import FetchHotelsReducer from './fetch-hotels-reducer'
import SaveDateBookingReducer from './save-date-boooking-reducer'
import SaveLoginReducer from './save-login-reducer'

const allReducers = combineReducers({
  fetchHotelsReducer: FetchHotelsReducer,
  saveDateBookingReducer: SaveDateBookingReducer,
  saveLoginReducer: SaveLoginReducer
})

export default allReducers