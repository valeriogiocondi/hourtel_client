export default function (state = [], action) {

  switch (action.type) {

    case 'SAVE_DATE_BOOKING': {

      return Object.assign([], state, action.payload);
      break;
    }

    default:
      return state
  }
}