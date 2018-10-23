export default function (state = [], action) {

  switch (action.type) {

    case 'SAVE_LOGIN': {

      return Object.assign([], state, action.payload);
      break;
    }

    default:
      return state
  }
}