import * as actionTypes from '../actions/sidebarActionTypes';

const initialState = {
  collapsed: false
}

const reducer = (state = initialState, action) => {
  switch(action.type){
    case (actionTypes.TOGGLE):
      return {
        ...state,
        collapsed: !state.collapsed
      }
    default:
      return state;
  }
}

export default reducer;