export default function (state = [], action) {

  switch (action.type) {

    case 'FETCH_HOTELS': {

      return Object.assign([], state, action.payload);
      break;
    }

    default:
      return state
  }
}