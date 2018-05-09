import * as actionTypes from '../actions/chatActionTypes';

const initialState = {
  id: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case (actionTypes.USER_CLICKED):
      console.log(action.id)
      return {
        ...state,
        id:action.id
      };
    default:
      return state;
  }
}
export default reducer;