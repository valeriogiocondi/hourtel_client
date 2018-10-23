export const fetchHotelsReducer = (obj) => {
  return {
    type: 'FETCH_HOTELS',
    payload: obj
  }
}

export const saveDateBookingReducer = (obj) => {
  return {
    type: 'SAVE_DATE_BOOKING',
    payload: obj
  }
}

export const saveLoginReducer = (obj) => {
  return {
    type: 'SAVE_LOGIN',
    payload: obj
  }
}